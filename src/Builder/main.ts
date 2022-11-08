import { SaltyAcaiBuilder, SweetAcaiBuilder } from "./AcaiBuilder";
import { Client } from "./Client";

/**
 *  Exemplo ruim do GURU???
 * 
 *  No frontend: components personalizaveis são um exemplo de builder, certo?
 */


const sweetBuilder = new SweetAcaiBuilder();
const saltyBuilder = new SaltyAcaiBuilder();

const client = new Client();


client.setAcaiBuilder(sweetBuilder);
client.basicAcai();
sweetBuilder.getProduct().listParts();

client.completeAcai();
sweetBuilder.getProduct().listParts();
