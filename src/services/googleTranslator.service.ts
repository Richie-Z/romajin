import { GoogleTranslator } from "@translate-tools/core/translators/GoogleTranslator";

export class GoogleTranslatorService {
  public async translate(text: string) {
    const translator = new GoogleTranslator({
      corsProxy: "http://localhost:8080/",
    });
    const res = await translator.translate(text, "ja", "en");
    return res;
  }
}

export const googleTranslatorService = new GoogleTranslatorService()
