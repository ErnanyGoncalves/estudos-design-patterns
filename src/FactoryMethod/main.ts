import { AirLogistics, RoadLogistics, SeaLogistics } from "./Logistics";

/**
 *  O que é isso?
 *  warning: CRLF will be replaced by LF the next time Git touches it
 * 
 * * * * * 
 *  Storybook
 *  Config prettier por pra formatar automaticamente  x husky
 *  .gitignore
 *  melhor forma de att pacotes
 */

const roadL = new RoadLogistics();
const seaL = new SeaLogistics();
const airL = new AirLogistics();

console.log(roadL.planDelivery())
console.log(seaL.planDelivery())
console.log(airL.planDelivery())