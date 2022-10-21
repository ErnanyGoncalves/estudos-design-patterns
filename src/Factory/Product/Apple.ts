import { Fruit } from "./Fruit";

export class Apple implements Fruit{
    getName(): string {
        return "Apple"
    }
    
    getVitamins(): string[] {
        return ["A","E","C"];
    }

}