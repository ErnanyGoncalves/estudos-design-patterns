export interface Chair {
  name: string;

  hasLegs(): boolean;
  sitOn(): string;
}

export class ArtDecoChair implements Chair {
  name: string = "decorative chair";

  hasLegs = (): boolean => true;
  sitOn = (): string => "Sitting on a decorative chair.";
}

export class VictorianChair implements Chair {
  name: string = "victorian chair";

  hasLegs = (): boolean => true;
  sitOn = (): string => "Sitting on a victorian chair.";
}

export class ModernChair implements Chair {
  name: string = "modern chair";

  hasLegs = (): boolean => false;
  sitOn = (): string => "Sitting on a modern chair.";
}
