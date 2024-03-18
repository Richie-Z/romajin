export async function waitForSpicetify(): Promise<void> {
  while (!Spicetify?.Platform) {
    await new Promise((r) => setTimeout(r, 100));
  }
}
