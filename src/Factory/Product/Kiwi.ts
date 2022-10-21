import { Fruit } from "./Fruit";

export class Kiwi implements Fruit{
    getName(): string {
        return "Kiwi"
    }

    getVitamins(): string[] {
        return ["C","K"];
    }

}