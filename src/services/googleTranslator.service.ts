import { GoogleTranslator } from "@translate-tools/core/translators/GoogleTranslator";
import { settingService } from "./setting.service";

export class GoogleTranslatorService {
  public async translate(text: string) {
    const translator = new GoogleTranslator({
      corsProxy: settingService.getGoogleTranslateSetting().corsProxy,
    });
    const res = await translator.translate(text, "ja", settingService.getGoogleTranslateSetting().targetLanguage);
    return res;
  }
}

export const googleTranslatorService = new GoogleTranslatorService()
