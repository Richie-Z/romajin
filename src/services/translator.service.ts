import { checkDomExists, createElement, getElement, isJapanese } from "@/utils";
import { kuroshiroService } from "./kuroshiro.service";
import { googleTranslatorService } from "./googleTranslator.service";
import { settingService } from "./setting.service";

export class TranslatorService {
  private originalLyric: string = "";
  private romajiLyric: string | null = null;

  /**
    * Converts the original lyrics to romaji and stores them.
    * @returns {Promise<[string, string | null]>} A promise that resolves to a tuple containing the original lyrics and the romaji version.
    */
  public async convertLyric(lyric?: string): Promise<[string, string | null]> {
    let originalLyric = "";
    if (!lyric) {
      (getElement({ selector: ".lyrics-lyricsContent-lyric", isAll: true }) as NodeListOf<HTMLElement>).
        forEach((val) => originalLyric += `${val.textContent}\n`)
    }
    let romajiLyric: string | null = null;
    if (isJapanese(lyric ?? originalLyric)) {
      romajiLyric = await kuroshiroService.convert(lyric ?? originalLyric);
    }

    this.originalLyric = lyric ?? originalLyric
    this.romajiLyric = romajiLyric

    return [originalLyric, romajiLyric]
  }

  /**
     * Renders the lyrics with their translations.
     */
  public renderLyric(): void {
    if (this.romajiLyric === null) return
    const lyricsBox = getElement({ selector: '.lyrics-lyricsContent-lyric', isAll: true }) as NodeListOf<Element>;

    lyricsBox.forEach((val, i) => {
      const oriLyric = this.originalLyric.split('\n')[i]
      const oriLyricBox = createElement({ className: 'lyrics-lyricsContent-text' }); oriLyricBox.textContent = oriLyric;

      if (settingService.getGoogleTranslateSetting().active) {
        (async () => {
          if (oriLyric === " ♪ " || oriLyric.length === 0 || !isJapanese(oriLyric)) return
          const translated = await googleTranslatorService.translate(oriLyric)
          let englishLyricBox = createElement({ className: 'lyrics-lyricsContent-text sub english' }); englishLyricBox.textContent = translated
          val.insertBefore(englishLyricBox, oriLyricBox)
        })()
      }

      const subLyric = this.romajiLyric!.split('\n')[i]
      if (subLyric === " ♪ ") return;
      const subLyricBox = createElement({ className: 'lyrics-lyricsContent-text sub' }); subLyricBox.innerHTML = subLyric
      val.replaceChildren(oriLyricBox, subLyricBox)
    });
  }

  /**
    * Initializes the translator service.
    */
  public async init() {
    await kuroshiroService.init()
    let isAlreadyTranslated = false;
    let translateSetting = settingService.getGoogleTranslateSetting();
    let kuroshiroSetting = settingService.getKuroshiroSetting();
    let isSettingChanged = false;

    setInterval(() => {
      if (JSON.stringify(translateSetting) !== JSON.stringify(settingService.getGoogleTranslateSetting()) ||
        JSON.stringify(kuroshiroSetting) !== JSON.stringify(settingService.getKuroshiroSetting())
      ) {
        isAlreadyTranslated = false
        isSettingChanged = true
      }

      if (checkDomExists({ selector: "div.lyrics-lyrics-container" })) {
        if (isAlreadyTranslated) return
        translatorService.convertLyric(isSettingChanged ? this.originalLyric : undefined).then(() => {
          translatorService.renderLyric()
          isAlreadyTranslated = true;
        })
        if (isSettingChanged) {
          translateSetting = settingService.getGoogleTranslateSetting();
          kuroshiroSetting = settingService.getKuroshiroSetting();
        }
      } else {
        isAlreadyTranslated = false;
      }
    }, 500)

    Spicetify.Player.addEventListener('songchange', () => {
      isAlreadyTranslated = false
    })
  }
}

export const translatorService = new TranslatorService()
