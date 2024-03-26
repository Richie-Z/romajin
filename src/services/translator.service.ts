import { GoogleTranslator } from "@translate-tools/core/translators/GoogleTranslator";
import { YandexTranslator } from "@translate-tools/core/translators/YandexTranslator";
import { TranslatorProvider, settingService } from "./setting.service";
import { BaseTranslator } from "@translate-tools/core/translators/BaseTranslator";

export class TranslatorService {

  /**
   * Translates the input text from Japanese to the target language using Google Translate | Yandex.
   * @param {string} text - The text to be translated.
   */
  public async translate(text: string): Promise<string> {
    const options = {
      corsProxy: settingService.getTranslatorSetting().corsProxy,
    }
    const translator: BaseTranslator = settingService.getTranslatorSetting().provider === TranslatorProvider.GOOGLE
      ? new GoogleTranslator(options)
      : new YandexTranslator(options);
    const res = await translator.translate(text, "ja", settingService.getTranslatorSetting().targetLanguage);
    return res;
  }
}

export const translatorService = new TranslatorService()
