import { AirLogistics, RoadLogistics, SeaLogistics } from "./Logistics";

/**
 *  Public class x export
 *  
 * 
 *  É errado eu criar um construtor no Logistics pra criar uma das subclasses a partir de um parametro? ou isso fere SOLID?
 */

const roadL = new RoadLogistics();
const seaL = new SeaLogistics();
const airL = new AirLogistics();

console.log(roadL.planDelivery())
console.log(seaL.planDelivery())
console.log(airL.planDelivery())