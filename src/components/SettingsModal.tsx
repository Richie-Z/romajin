import '../styles/romajin-settings.scss'
import React, { ChangeEvent, useEffect, useState } from 'react'
import SwitchButton from './SwitchButton'
import { supportedLanguages } from '@translate-tools/core/translators/GoogleTranslator'
import { TranslateSettingModel } from '@/models/TranslateSettingModel'
import { settingService } from '@/services/setting.service'

export default function SettingModal() {
  const [translate, setTranslate] = useState<TranslateSettingModel>(settingService.getGoogleTranslateSetting())

  useEffect(() => {
    settingService.setGoogleTranslateSetting(translate)
  }, [translate])

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
          <p className="description">Enable the google translator</p>
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
                <div className="title">Cors Proxy</div>
                <input type="text"
                  className='input-field'
                  onChange={(e) => setTranslate((data) => ({ ...data, corsProxy: e.target.value }))}
                  defaultValue={translate.corsProxy ?? ''}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}
