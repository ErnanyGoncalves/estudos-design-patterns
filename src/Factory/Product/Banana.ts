import { Fruit } from "./Fruit";

export class Banana implements Fruit{

    getName(): string {
        return "Banana"
    }

    getVitamins(): string[] {
        return ["A","B","C"];
    }

}