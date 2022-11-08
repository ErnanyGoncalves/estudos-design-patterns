import { AirLogistics, RoadLogistics, SeaLogistics } from "./Logistics";

const roadL = new RoadLogistics();
const seaL = new SeaLogistics();
const airL = new AirLogistics();

console.log(roadL.planDelivery())
console.log(seaL.planDelivery())
console.log(airL.planDelivery())