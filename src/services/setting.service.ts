import { TranslateModel } from "@/models/translateModel"

const DEFAULT_GOOGLE_TRANSLATE_SETTING: TranslateModel = {
  active: true,
  targetLanguage: 'en',
  corsProxy: 'http://localhost:8080/'
}

export class SettingService {
  private readonly googleTranslateSettingKey: string = "romajin:google_translate"

  public getGoogleTranslateSetting(): TranslateModel {
    const localData = localStorage.getItem(this.googleTranslateSettingKey);
    return localData ? JSON.parse(localData) : DEFAULT_GOOGLE_TRANSLATE_SETTING
  }

  public setGoogleTranslateSetting(setting: TranslateModel) {
    localStorage.setItem(this.googleTranslateSettingKey, JSON.stringify(setting))
  }
}

export const settingService = new SettingService()  
