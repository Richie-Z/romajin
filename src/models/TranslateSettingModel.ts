import { TranslatorProvider } from "@/services/setting.service"

export type TranslateSettingModel = {
  active: boolean
  targetLanguage: string
  corsProxy: string,
  provider: `${TranslatorProvider}`
}
