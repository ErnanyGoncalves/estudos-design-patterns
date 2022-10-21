import { Apple, Banana, Kiwi } from "./Product";
import { Buyer,Seller } from "./";

const buyer = new Buyer();
const seller = new Seller();
const apple = new Apple()
const banana = new Banana()
const kiwi = new Kiwi()

const fruits = [apple,banana,kiwi];

buyer.getAllVitamins(fruits)
buyer.manageFruits(50,banana.getName().toLowerCase());

seller.getAllVitamins(fruits)
seller.manageFruits(30,kiwi.getName().toLowerCase());
