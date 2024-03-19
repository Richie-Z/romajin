import { BrowserTranslateOptions } from "google-translate-api-browser/dist/types/BrowserTranslateOptions";
import { TranslationResult } from "google-translate-api-browser/dist/types/TranslationResult";

declare module "google-translate-api-browser" {
  export function translate(text: string, options?: BrowserTranslateOptions): Promise<TranslationResult>;
}

