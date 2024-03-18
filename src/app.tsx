import { waitForSpicetify } from "./utils/spicetify";
import { kuroshiroService } from "./services/kuroshiro.service";
import isJapanese from "./utils/isJapanese";

async function main(): Promise<void> {
  await waitForSpicetify()
  await kuroshiroService.init()
  const lyricButton = document.querySelector("button.main-nowPlayingBar-lyricsButton")

  if (lyricButton) {
    lyricButton.addEventListener('click', async () => {
      let originalLyric = ""; document.querySelectorAll('.lyrics-lyricsContent-lyric').forEach((val) => originalLyric += `${val.textContent}\n`);
      if (isJapanese(originalLyric)) {
        let romajiLyric = await kuroshiroService.convert(originalLyric);
        console.log(romajiLyric)
        document.querySelectorAll('.lyrics-lyricsContent-lyric').forEach((val, i) => val.textContent = romajiLyric.split('\n')[i]);
      }
    })
  }
}

export default main;
