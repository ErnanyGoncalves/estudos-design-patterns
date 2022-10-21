import { MarketFactory } from "./MarketFactory";
import { Fruit } from "./Product/Fruit";

export class Buyer extends MarketFactory{
    public manageFruits(qtd: number, fruit: string) {
        console.log(`I'm buying ${qtd} fruit${qtd > 1 ? "s" : ""}.`);
    }

}