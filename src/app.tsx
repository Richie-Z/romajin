import React from 'react';
import './styles/lyric-text.scss'
import { romajinService } from "@/services/romajin.service";
import { waitForSpicetify } from "@/utils";
import SettingsModal from '@components/SettingsModal';
import { TRANSLATE_ICON } from './constants/TRANSLATE_ICON';

async function main(): Promise<void> {
  await waitForSpicetify()
  await romajinService.init()

  new Spicetify.Menu.Item(
    'Romajin Settings',
    false,
    () => {
      Spicetify.PopupModal.display({
        title: 'Romajin Settings',
        content: React.createElement(SettingsModal) as any,
        isLarge: true
      })
    },
    TRANSLATE_ICON
  ).register()
}

export default main;
