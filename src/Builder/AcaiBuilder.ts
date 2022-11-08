import { Acai } from "./Acai";

export interface AcaiBuilder {
  putAcai(): void;
  putIngredientA(): void;
  putIngredientB(): void;
}

export class SweetAcaiBuilder implements AcaiBuilder {
  private acai: Acai;

  constructor() {
    this.acai = new Acai();
  }

  reset = (): void => {
    this.acai = new Acai();
  };
  putAcai = (): void => {
    this.acai.parts.push("açai");
  };
  putIngredientA = (): void => {
    this.acai.parts.push("condensed milk");
  };
  putIngredientB = (): void => {
    this.acai.parts.push("M&Ms");
  };
  getProduct = (): Acai => {
    const result = this.acai;
    this.reset();
    return result;
  };
}

export class SaltyAcaiBuilder implements AcaiBuilder {
  private acai: Acai;

  constructor() {
    this.acai = new Acai();
  }
  reset = (): void => {
    this.acai = new Acai();
  };

  putAcai = (): void => {
    this.acai.parts.push("açai");
  };
  putIngredientA = (): void => {
    this.acai.parts.push("farofa");
  };
  putIngredientB = (): void => {
    this.acai.parts.push("cheese");
  };

  getProduct = (): Acai => {
    const result = this.acai;
    this.reset();
    return result;
  };
}
