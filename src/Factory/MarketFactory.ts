import { Fruit } from "./Product/Fruit";

  export abstract class MarketFactory{
  public abstract manageFruits(qtd:number, fruit:string) :void;

  public getAllVitamins(fruits: Fruit[]) {
    let fruitsAndVitamins: string = "******** Fruits and Vitamins ********\n";
    fruits.map(
      (f: Fruit) =>
        (fruitsAndVitamins += `${f.getName()} - Vitamins: ${f
          .getVitamins()
          .toString()}\n`)
    );
    fruitsAndVitamins += "*************************************";
    console.log(fruitsAndVitamins);
  }
}
