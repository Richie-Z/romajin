import './styles/lyric-text.scss'
import { kuroshiroService } from "@services/kuroshiro.service";
import { translatorService } from "@services/translator.service";
import { waitForSpicetify, checkDomExists } from "@utils/index";

async function main(): Promise<void> {
  await waitForSpicetify()
  await kuroshiroService.init()
  let isAlreadyTranslated = false;

  setInterval(async () => {
    if (checkDomExists({ selector: "div.lyrics-lyrics-container" })) {
      if (isAlreadyTranslated) return
      translatorService.convertLyric().then(() => {
        translatorService.renderLyric()
        isAlreadyTranslated = true;
      })
    } else {
      isAlreadyTranslated = false;
    }
  }, 1000)

  Spicetify.Player.addEventListener('songchange', () => {
    isAlreadyTranslated = false
  })
}

export default main;
