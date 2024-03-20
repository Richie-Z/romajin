import './styles/lyric-text.scss'
import { translatorService } from "@services/translator.service";
import { waitForSpicetify } from "@/utils";

async function main(): Promise<void> {
  await waitForSpicetify()
  await translatorService.init()
}

export default main;
