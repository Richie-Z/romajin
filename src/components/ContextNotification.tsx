import React from "react";
import '../styles/context-notification.scss'

export default function ContextNotification(
  { ori, romaji, translated }: { ori: string, romaji?: string, translated?: string }
) {
  return (
    <>
      <p className="sub">{translated}</p>
      <p>{ori}</p>
      <p className="sub">{romaji}</p>
    </>
  )
}
