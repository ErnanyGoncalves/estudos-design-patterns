import { MarketFactory } from "./MarketFactory";
import { Fruit } from "./Product/Fruit";

export class Seller extends MarketFactory {
  public manageFruits(qtd: number, fruit: string) {
    console.log(`I'm selling ${qtd} fruit${qtd > 1 ? "s" : ""}.`);
  }
}
