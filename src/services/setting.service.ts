import { KuroshiroSettingModel } from "@/models/KuroshiroSettingModel";
import { TranslateSettingModel } from "@/models/TranslateSettingModel"

export enum TranslatorProvider {
  GOOGLE = "google",
  YANDEX = "yandex"
}

const DEFAULT_TRANSLATOR_SETTING: TranslateSettingModel = {
  active: true,
  targetLanguage: 'en',
  corsProxy: '',
  provider: TranslatorProvider.GOOGLE
}

const DEFAULT_KUROSHIRO_SETTING: KuroshiroSettingModel = {
  to: "romaji",
  mode: "spaced"
}

export class SettingService {
  private readonly translatorSettingKey: string = "romajin:translator"
  private readonly kuroshiroSettingKey: string = "romajin:kuroshiro"

  public getTranslatorSetting(): TranslateSettingModel {
    const localData = localStorage.getItem(this.translatorSettingKey);
    return localData ? JSON.parse(localData) : DEFAULT_TRANSLATOR_SETTING
  }

  public setTranslatorSetting(setting: TranslateSettingModel) {
    localStorage.setItem(this.translatorSettingKey, JSON.stringify(setting))
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
