import { TranslateSettingModel } from "@/models/TranslateSettingModel"

const DEFAULT_GOOGLE_TRANSLATE_SETTING: TranslateSettingModel = {
  active: true,
  targetLanguage: 'en',
  corsProxy: 'http://localhost:8080/'
}

export class SettingService {
  private readonly googleTranslateSettingKey: string = "romajin:google_translate"

  public getGoogleTranslateSetting(): TranslateSettingModel {
    const localData = localStorage.getItem(this.googleTranslateSettingKey);
    return localData ? JSON.parse(localData) : DEFAULT_GOOGLE_TRANSLATE_SETTING
  }

  public setGoogleTranslateSetting(setting: TranslateSettingModel) {
    localStorage.setItem(this.googleTranslateSettingKey, JSON.stringify(setting))
  }
}

export const settingService = new SettingService()  
