export enum KuroshiroTo {
  hiragana = "hiragana",
  katakana = "katakana",
  romaji = "romaji",
}

export enum KuroshiroMode {
  normal = "normal",
  spaced = "spaced",
  okurigana = "okurigana",
  furigana = "furigana",
}

export type KuroshiroSettingModel = {
  to: `${KuroshiroTo}`
  mode: `${KuroshiroMode}`
}
