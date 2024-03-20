import { KuroshiroBuilder } from "@utils/kuromojiBuilder";
import { settingService } from "./setting.service";

export class KuroshiroService {
  private kuroshiro: Kuroshiro | null = null;

  /**
   * Init the Kuroshiro service.
   */
  public async init(): Promise<void> {
    this.kuroshiro = await new KuroshiroBuilder().createKuroshiro();
  }

  /**
   * Convert a value using the stored settings.
   * @param value The japanese value to convert.
   */
  public async convert(value: string): Promise<string> {
    if (this.kuroshiro === null) {
      console.error(
        "Property 'kuroshiro' is null. Call 'init' before using the service.",
      );
      return '';
    }

    return await this.kuroshiro.convert(value, {
      to: settingService.getKuroshiroSetting().to,
      mode: settingService.getKuroshiroSetting().mode
    });
  }
}

export const kuroshiroService: KuroshiroService = new KuroshiroService();
