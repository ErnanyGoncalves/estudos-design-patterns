export class Acai {
  parts: string[] = [];
  listParts = (): void =>
    console.log(`This açaí has: ${this.parts.join(", ")}\n`);
}
