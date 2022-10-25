import { ArtDecoChair, Chair, ModernChair, VictorianChair } from "./Chair";
import {
  ArtDecoCoffeeTable,
  CoffeeTable,
  ModernCoffeeTable,
  VictorianCoffeeTable,
} from "./CoffeeTable";
import { ArtDecoSofa, ModernSofa, Sofa, VictorianSofa } from "./Sofa";

interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createCoffeeTable(): CoffeeTable;
}

export class ArtDecoFurnitureFactory implements FurnitureFactory {
  createChair = (): Chair => new ArtDecoChair();

  createSofa = (): Sofa => new ArtDecoSofa();

  createCoffeeTable = (): CoffeeTable => new ArtDecoCoffeeTable();
}

export class VictorianFurnitureFactory implements FurnitureFactory {
  createChair = (): Chair => new VictorianChair();

  createSofa = (): Sofa => new VictorianSofa();

  createCoffeeTable = (): CoffeeTable => new VictorianCoffeeTable();
}

export class ModernFurnitureFactory implements FurnitureFactory {
  createChair = (): Chair => new ModernChair();

  createSofa = (): Sofa => new ModernSofa();

  createCoffeeTable = (): CoffeeTable => new ModernCoffeeTable();
}
