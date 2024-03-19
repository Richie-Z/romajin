import { translate } from "google-translate-api-browser";

export const translateJapaneseToEnglish = async (text: string) => {
  const res = await translate(text, {
    to: "en",
    // corsUrl: "https://cors-anywhere.herokuapp.com/"
    corsUrl: "https://1dce-103-119-142-221.ngrok-free.app/"
  })
  return res.text
}
