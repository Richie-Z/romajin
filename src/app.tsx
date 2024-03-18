import { waitForSpicetify } from "./utils/spicetify";
import { kuroshiroService } from "./services/kuroshiro.service";
import isJapanese from "./utils/isJapanese";
import './styles/lyric-text.scss'

async function main(): Promise<void> {
  await waitForSpicetify()
  await kuroshiroService.init()
  const lyricButton = document.querySelector("button.main-nowPlayingBar-lyricsButton")

  const convertLyric = async () => {
    let originalLyric = ""; document.querySelectorAll('.lyrics-lyricsContent-lyric').forEach((val) => originalLyric += `${val.textContent}\n`);
    if (isJapanese(originalLyric)) {
      let romajiLyric = await kuroshiroService.convert(originalLyric);
      document.querySelectorAll('.lyrics-lyricsContent-lyric').forEach((val, i) => {
        const parsedLyric = romajiLyric.split('\n')[i]
        if (parsedLyric === " ♪ " || val.children.length > 1) return;
        const newEl = document.createElement('div')
        newEl.setAttribute('class', 'lyrics-lyricsContent-text sub')
        newEl.textContent = parsedLyric
        val.appendChild(newEl)
      });
    }
  }

  if (lyricButton) {
    lyricButton.addEventListener('click', async () => {
      await convertLyric()
    })
  }

  Spicetify.Player.addEventListener('songchange', async () => {
    console.log("should reconvert")
    await convertLyric()
  })
}

export default main;
