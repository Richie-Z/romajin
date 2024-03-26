import { checkDomExists, createElement, getContextText, getElement, isJapanese } from "@/utils";
import { kuroshiroService } from "./kuroshiro.service";
import { translatorService } from "./translator.service";
import { settingService } from "./setting.service";
import { TRANSLATE_ICON } from "@/constants/TRANSLATE_ICON";
import ContextNotification from "@/components/ContextNotification";
import React from "react";

export class RomajinService {
  private originalLyric: string = "";
  private romajiLyric: string | null = null;
  private contextMenu: Spicetify.ContextMenu.Item | null = null;

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

      if (settingService.getTranslatorSetting().active) {
        (async () => {
          if (oriLyric === " ♪ " || oriLyric.length === 0 || !isJapanese(oriLyric)) return
          const translated = await translatorService.translate(oriLyric)
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
    * Initializes the romajin service.
    */
  public async init() {
    await kuroshiroService.init()
    this.initContextMenu()
    let isAlreadyTranslated = false;
    let translateSetting = settingService.getTranslatorSetting();
    let kuroshiroSetting = settingService.getKuroshiroSetting();
    let isSettingChanged = false;

    setInterval(() => {
      if (JSON.stringify(translateSetting) !== JSON.stringify(settingService.getTranslatorSetting()) ||
        JSON.stringify(kuroshiroSetting) !== JSON.stringify(settingService.getKuroshiroSetting())
      ) {
        isSettingChanged = true
      }
      if (!checkDomExists({ selector: "div.lyrics-lyrics-container" })) return;
      isAlreadyTranslated = checkDomExists({ selector: "div.lyrics-lyricsContent-text.sub" });
      if (isAlreadyTranslated && !isSettingChanged) return
      romajinService.convertLyric(isSettingChanged && isAlreadyTranslated ? this.originalLyric : undefined).then(() => {
        romajinService.renderLyric()
      })
      if (isSettingChanged) {
        translateSetting = settingService.getTranslatorSetting();
        kuroshiroSetting = settingService.getKuroshiroSetting();
        isSettingChanged = false;
      }
    }, 500)

    Spicetify.Player.addEventListener('songchange', () => {
      isAlreadyTranslated = false
    })
  }

  private initContextMenu() {
    if (this.contextMenu) this.contextMenu.deregister()

    let selectedText = "";

    this.contextMenu = new Spicetify.ContextMenu.Item(
      "Help me Guru!",
      async () => {
        Spicetify.showNotification(React.createElement(ContextNotification, {
          ori: selectedText,
          romaji: await kuroshiroService.convert(selectedText),
          translated: settingService.getTranslatorSetting().active ? await translatorService.translate(selectedText) : undefined
        }) as any, false, 3500)
      },
      () => {
        selectedText = getContextText() ?? '';
        return isJapanese(selectedText);
      },
      TRANSLATE_ICON as any
    )
    this.contextMenu.register()
  }
}

export const romajinService = new RomajinService()
