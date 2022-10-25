export interface Transport {
  deliver(): string;
}

export class Truck implements Transport {
  deliver = (): string => "Deliver by land in a box.";
}
export class Ship implements Transport {
  deliver = (): string => "Deliver by sea in a container.";
}
export class Plane implements Transport {
  deliver = (): string => "Deliver by air in a container.";
}
