import { KuroshiroSettingModel } from "@/models/KuroshiroSettingModel";
import { TranslateSettingModel } from "@/models/TranslateSettingModel"

const DEFAULT_GOOGLE_TRANSLATE_SETTING: TranslateSettingModel = {
  active: true,
  targetLanguage: 'en',
  corsProxy: 'http://localhost:8080/'
}

const DEFAULT_KUROSHIRO_SETTING: KuroshiroSettingModel = {
  to: "romaji",
  mode: "spaced"
}

export class SettingService {
  private readonly googleTranslateSettingKey: string = "romajin:google_translate"
  private readonly kuroshiroSettingKey: string = "romajin:kuroshiro"

  public getGoogleTranslateSetting(): TranslateSettingModel {
    const localData = localStorage.getItem(this.googleTranslateSettingKey);
    return localData ? JSON.parse(localData) : DEFAULT_GOOGLE_TRANSLATE_SETTING
  }

  public setGoogleTranslateSetting(setting: TranslateSettingModel) {
    localStorage.setItem(this.googleTranslateSettingKey, JSON.stringify(setting))
  }

  public getKuroshiroSetting(): KuroshiroSettingModel {
    const localData = localStorage.getItem(this.kuroshiroSettingKey);
    return localData ? JSON.parse(localData) : DEFAULT_KUROSHIRO_SETTING
  }

  public setKuroshiroSetting(setting: KuroshiroSettingModel) {
    localStorage.setItem(this.kuroshiroSettingKey, JSON.stringify(setting))
  }
}

export const settingService = new SettingService()  
