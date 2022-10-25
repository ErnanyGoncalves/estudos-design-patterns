import { Chair } from "./Chair";
import { Sofa } from "./Sofa";

export interface CoffeeTable {
  hasLegs(): boolean;
  sitOn(): string;

  fitsWellWith(p: Chair | Sofa): string;
}

export class ArtDecoCoffeeTable implements CoffeeTable {
  hasLegs = (): boolean => true;
  sitOn = (): string => "It's not ok to sit on a decorative coffee table.";
  fitsWellWith = (p: Chair | Sofa): string =>
    `This ${
      p.name.search("decorative") !== -1
        ? p.name + " fits"
        : p.name + " doesn't fit"
    } well with decorative coffee table`;
}

export class VictorianCoffeeTable implements CoffeeTable {
  hasLegs = (): boolean => true;
  sitOn = (): string => "It's not ok to sit on a victorian coffee table.";
  fitsWellWith = (p: Chair | Sofa): string =>
    `This ${
      p.name.search("victorian") !== -1
        ? p.name + " fits"
        : p.name + " doesn't fit"
    } well with victorian coffee table`;
}

export class ModernCoffeeTable implements CoffeeTable {
  hasLegs = (): boolean => false;
  sitOn = (): string => "It's not ok to sit on a modern coffee table.";
  fitsWellWith = (p: Chair | Sofa): string =>
    `This ${
      p.name.search("modern") !== -1 ? p.name + " fits" : p.name + " doesn't fit"
    } well with modern coffee table`;
}
