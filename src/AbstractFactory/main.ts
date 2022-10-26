import {
  ArtDecoFurnitureFactory,
  ModernFurnitureFactory,
  VictorianFurnitureFactory,
} from "./FurnitureFactory";

const artDecoFactory = new ArtDecoFurnitureFactory();
const artDecoChair = artDecoFactory.createChair();
const artDecoSofa = artDecoFactory.createSofa();
const artDecoCoffeeTable = artDecoFactory.createCoffeeTable();

const victorianFactory = new VictorianFurnitureFactory();
const victorianChair = victorianFactory.createChair();
const victorianSofa = victorianFactory.createSofa();
const victorianCoffeeTable = victorianFactory.createCoffeeTable();

const modernFactory = new ModernFurnitureFactory();
const modernChair = modernFactory.createChair();
const modernSofa = modernFactory.createSofa();
const modernCoffeeTable = modernFactory.createCoffeeTable();

console.log(artDecoChair.name, artDecoChair.hasLegs(), artDecoChair.sitOn());
console.log(artDecoSofa.name, artDecoSofa.hasLegs(), artDecoSofa.sitOn());
console.log(artDecoCoffeeTable.hasLegs(), artDecoCoffeeTable.sitOn());
console.log("---------------");
console.log(
  victorianChair.name,
  victorianChair.hasLegs(),
  victorianChair.sitOn()
);
console.log(victorianSofa.name, victorianSofa.hasLegs(), victorianSofa.sitOn());
console.log(victorianCoffeeTable.hasLegs(), victorianCoffeeTable.sitOn());
console.log("---------------");
console.log(modernChair.name, modernChair.hasLegs(), modernChair.sitOn());
console.log(modernSofa.name, modernSofa.hasLegs(), modernSofa.sitOn());
console.log(modernCoffeeTable.hasLegs(), modernCoffeeTable.sitOn());
console.log("---------------");
console.log(artDecoCoffeeTable.fitsWellWith(artDecoChair));
console.log(artDecoCoffeeTable.fitsWellWith(artDecoSofa));
console.log(artDecoCoffeeTable.fitsWellWith(modernSofa));
console.log("---------------");
console.log(victorianCoffeeTable.fitsWellWith(victorianChair));
console.log(victorianCoffeeTable.fitsWellWith(victorianSofa));
console.log(victorianCoffeeTable.fitsWellWith(modernSofa));
console.log("---------------");
console.log(modernCoffeeTable.fitsWellWith(modernChair));
console.log(modernCoffeeTable.fitsWellWith(modernSofa));
console.log(modernCoffeeTable.fitsWellWith(artDecoSofa));
