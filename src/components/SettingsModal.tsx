import '../styles/romajin-settings.scss'
import React, { useEffect, useState } from 'react'
import SwitchButton from './SwitchButton'
import { supportedLanguages } from '@translate-tools/core/translators/GoogleTranslator'
import { TranslateSettingModel } from '@/models/TranslateSettingModel'
import { TranslatorProvider, settingService } from '@/services/setting.service'
import { KuroshiroMode, KuroshiroSettingModel, KuroshiroTo } from '@/models/KuroshiroSettingModel'

export default function SettingModal() {
  const [translate, setTranslate] = useState<TranslateSettingModel>(settingService.getTranslatorSetting())
  const [kuroshiro, setKuroshiro] = useState<KuroshiroSettingModel>(settingService.getKuroshiroSetting())

  useEffect(() => {
    settingService.setTranslatorSetting(translate)
  }, [translate])

  useEffect(() => {
    settingService.setKuroshiroSetting(kuroshiro)
  }, [kuroshiro])

  return (
    <div className='romajin-settings'>
      <div className='setting-box'>
        <p className='title'>Translate</p>
        <div className={`card ${translate ? 'active' : null}`}>
          <div className='input'>
            <div className="title">Enabled</div>
            <SwitchButton
              onChange={(e) => setTranslate((data) => ({ ...data, active: e as boolean }))}
              defaultChecked={translate.active}
            />
          </div>
          <p className="description">Enable the translator</p>
        </div>
        {translate.active && (
          <div className="translate-child">
            <div className="card child">
              <div className='input'>
                <div className="title">Target Language</div>
                <select
                  className="input-field"
                  onChange={(e) => setTranslate((data) => ({ ...data, targetLanguage: e.target.value }))}
                >
                  {supportedLanguages.map((lang) =>
                    <option
                      value={lang}
                      key={lang}
                      selected={lang === translate.targetLanguage}>{lang}</option>
                  )}
                </select>
              </div>
            </div>
            <div className="card child">
              <div className='input'>
                <div className="title">Translator Provider</div>
                <select
                  className="input-field"
                  onChange={(e) => setTranslate((data) => ({ ...data, provider: e.target.value as `${TranslatorProvider}` }))}
                >
                  {Object.values(TranslatorProvider).map((provider) =>
                    <option
                      value={provider}
                      key={provider}
                      selected={provider === translate.provider}>{provider}</option>
                  )}
                </select>
              </div>
            </div>
            <div className="card child">
              <div className='input'>
                <div className="title">CORS Proxy</div>
                <input type="text"
                  className='input-field'
                  onChange={(e) => setTranslate((data) => ({ ...data, corsProxy: e.target.value }))}
                  defaultValue={translate.corsProxy ?? ''}
                />
              </div>
              <p className="description">Must be filled, Accessing the Translate API is blocked by CORS if not accessing through a proxy.<a href='https://github.com/Richie-Z/romajin/issues/1#issuecomment-2017152225'> Read this issue </a></p>
            </div>
          </div>
        )}
        <p className='title'>Romaji Setting</p>
        <div className="card">
          <div className='input'>
            <div className="title">Convert To</div>
            <select
              className="input-field"
              onChange={(e) => setKuroshiro((data) => ({ ...data, to: e.target.value as `${KuroshiroTo}` }))}
            >
              {Object.values(KuroshiroTo).map((to) =>
                <option
                  value={to}
                  key={to}
                  selected={to === kuroshiro.to}>{to}</option>
              )}
            </select>
          </div>
          <p className="description">Target syllabary [hiragana, katakana, romaji]</p>
        </div>
        <div className="card">
          <div className='input'>
            <div className="title">Convert Mode</div>
            <select
              className="input-field"
              onChange={(e) => setKuroshiro((data) => ({ ...data, mode: e.target.value as `${KuroshiroMode}` }))}
            >
              {Object.values(KuroshiroMode).map((mode) =>
                <option
                  value={mode}
                  key={mode}
                  selected={mode === kuroshiro.mode}>{mode}</option>
              )}
            </select>
          </div>
          <p className="description">Convert mode [normal, spaced, okurigana, furigana]</p>
        </div>
      </div>
    </div>
  )
}
