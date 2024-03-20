import React from 'react';
import './styles/lyric-text.scss'
import { translatorService } from "@services/translator.service";
import { waitForSpicetify } from "@/utils";
import SettingsModal from '@components/SettingsModal';

async function main(): Promise<void> {
  await waitForSpicetify()
  await translatorService.init()

  new Spicetify.Menu.Item(
    'Romajin Settings',
    false,
    (self) => {
      Spicetify.PopupModal.display({
        title: 'Romajin Settings',
        content: React.createElement(SettingsModal) as any,
        isLarge: true
      })
    },
  ).register()
}

export default main;
