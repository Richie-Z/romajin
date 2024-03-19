import './styles/lyric-text.scss'
import { kuroshiroService } from "@services/kuroshiro.service";
import { waitForSpicetify, isJapanese, getElement, createElement, translateJapaneseToEnglish, checkDomExists } from "@utils/index";

async function main(): Promise<void> {
  await waitForSpicetify()
  await kuroshiroService.init()
  let isAlreadyTranslated = false;

  const convertLyric: () => Promise<[string, string | null]> = async () => {
    let originalLyric = "";
    (getElement({ selector: ".lyrics-lyricsContent-lyric", isAll: true }) as NodeListOf<HTMLElement>).
      forEach((val) => originalLyric += `${val.textContent}\n`)
    let romajiLyric: string | null = null;
    if (isJapanese(originalLyric)) {
      romajiLyric = await kuroshiroService.convert(originalLyric);
    }
    isAlreadyTranslated = true;
    return [originalLyric, romajiLyric]
  }

  const renderLyric = (originalLyric: string, romajiLyric: string) => {
    const lyricsBox = getElement({ selector: '.lyrics-lyricsContent-lyric', isAll: true }) as NodeListOf<Element>;
    lyricsBox.forEach((val, i) => {
      const oriLyric = originalLyric.split('\n')[i]
      const oriLyricBox = createElement({ className: 'lyrics-lyricsContent-text' }); oriLyricBox.textContent = oriLyric
      const subLyric = romajiLyric.split('\n')[i];
      (async () => {
        if (!isJapanese(oriLyric)) return
        const translated = await translateJapaneseToEnglish(oriLyric)
        let englishLyricBox = createElement({ className: 'lyrics-lyricsContent-text sub english' }); englishLyricBox.textContent = translated
        val.insertBefore(englishLyricBox, oriLyricBox)
      })()
      if (subLyric === " ♪ ") return;
      const subLyricBox = createElement({ className: 'lyrics-lyricsContent-text sub' }); subLyricBox.textContent = subLyric
      val.replaceChildren(oriLyricBox, subLyricBox)
    });
  }

  setInterval(async () => {
    if (checkDomExists({ selector: "div.lyrics-lyrics-container" })) {
      if (!isAlreadyTranslated) {
        const [originalLyric, romajiLyric] = await convertLyric()
        if (!romajiLyric) return
        renderLyric(originalLyric, romajiLyric)
      }
    } else {
      isAlreadyTranslated = false;
    }
  }, 1000)

  Spicetify.Player.addEventListener('songchange', () => {
    isAlreadyTranslated = false
  })
}

export default main;
