import { checkDomExists, createElement, getElement, isJapanese, translateJapaneseToEnglish } from "@/utils";
import { kuroshiroService } from "./kuroshiro.service";

export class TranslatorService {
  private originalLyric: string = "";
  private romajiLyric: string | null = null;

  public async convertLyric(): Promise<[string, string | null]> {
    let originalLyric = "";
    (getElement({ selector: ".lyrics-lyricsContent-lyric", isAll: true }) as NodeListOf<HTMLElement>).
      forEach((val) => originalLyric += `${val.textContent}\n`)
    let romajiLyric: string | null = null;
    if (isJapanese(originalLyric)) {
      romajiLyric = await kuroshiroService.convert(originalLyric);
    }

    this.originalLyric = originalLyric
    this.romajiLyric = romajiLyric

    return [originalLyric, romajiLyric]
  }

  public renderLyric(): void {
    if (this.romajiLyric === null) return
    const lyricsBox = getElement({ selector: '.lyrics-lyricsContent-lyric', isAll: true }) as NodeListOf<Element>;

    lyricsBox.forEach((val, i) => {
      const oriLyric = this.originalLyric.split('\n')[i]
      const oriLyricBox = createElement({ className: 'lyrics-lyricsContent-text' }); oriLyricBox.textContent = oriLyric;

      (async () => {
        if (oriLyric === " ♪ " || oriLyric.length === 0 || !isJapanese(oriLyric)) return
        const translated = await translateJapaneseToEnglish(oriLyric)
        let englishLyricBox = createElement({ className: 'lyrics-lyricsContent-text sub english' }); englishLyricBox.textContent = translated
        val.insertBefore(englishLyricBox, oriLyricBox)
      })()

      const subLyric = this.romajiLyric!.split('\n')[i]
      if (subLyric === " ♪ ") return;
      const subLyricBox = createElement({ className: 'lyrics-lyricsContent-text sub' }); subLyricBox.textContent = subLyric
      val.replaceChildren(oriLyricBox, subLyricBox)
    });
  }

  public async init() {
    await kuroshiroService.init()
    let isAlreadyTranslated = false;

    setInterval(() => {
      if (checkDomExists({ selector: "div.lyrics-lyrics-container" })) {
        if (isAlreadyTranslated) return
        translatorService.convertLyric().then(() => {
          translatorService.renderLyric()
          isAlreadyTranslated = true;
        })
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
