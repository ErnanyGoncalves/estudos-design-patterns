import { Plane, Ship, Transport, Truck } from "./Transport";

abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): string {
    const transport: Transport = this.createTransport();
    return transport.deliver();
  }
}

export class RoadLogistics extends Logistics {
  createTransport = (): Transport => new Truck();
}
export class SeaLogistics extends Logistics {
  createTransport = (): Transport => new Ship();
}
export class AirLogistics extends Logistics {
  createTransport = (): Transport => new Plane();
}
