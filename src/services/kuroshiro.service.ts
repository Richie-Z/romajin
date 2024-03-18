import { KuroshiroBuilder } from "../utils/kuromojiBuilder";

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
      to: "romaji",
      mode: "spaced"
    });
  }
}

export const kuroshiroService: KuroshiroService = new KuroshiroService();
