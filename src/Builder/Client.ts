import { AcaiBuilder } from "./AcaiBuilder";

export class Client {
  private acaiBuilder: AcaiBuilder;

  setAcaiBuilder = (aBuilder: AcaiBuilder): void => {
    this.acaiBuilder = aBuilder;
  };

  pureAcai = (): void => {
    this.acaiBuilder.putAcai();
  };
  basicAcai = (): void => {
    this.acaiBuilder.putAcai();
    this.acaiBuilder.putIngredientA();
  };
  completeAcai = (): void => {
    this.acaiBuilder.putAcai();
    this.acaiBuilder.putIngredientA();
    this.acaiBuilder.putIngredientB();
  };
}
