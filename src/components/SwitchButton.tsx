import '../styles/switch-button.scss'
import React, { HtmlHTMLAttributes } from "react";

export default function SwitchButton(
  { onChange, ...props }: { onChange: (val: boolean) => void } & HtmlHTMLAttributes<HTMLInputElement>
) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        {...props} />
      <span className="slider round"></span>
    </label>
  )
}
