import { GoogleTranslator } from '@translate-tools/core/translators/GoogleTranslator';

export const translateJapaneseToEnglish = async (text: string) => {
  const translator = new GoogleTranslator({
    corsProxy: "http://localhost:8080/",
  });
  const res = await translator.translate(text, "ja", "en");
  return res;
}
