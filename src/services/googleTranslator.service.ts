import { GoogleTranslator } from "@translate-tools/core/translators/GoogleTranslator";
import { settingService } from "./setting.service";

export class GoogleTranslatorService {

  /**
   * Translates the input text from Japanese to the target language using Google Translate.
   * @param {string} text - The text to be translated.
   */
  public async translate(text: string): Promise<string> {
    const translator = new GoogleTranslator({
      corsProxy: settingService.getGoogleTranslateSetting().corsProxy,
    });
    const res = await translator.translate(text, "ja", settingService.getGoogleTranslateSetting().targetLanguage);
    return res;
  }
}

export const googleTranslatorService = new GoogleTranslatorService()
