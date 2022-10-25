export interface Sofa {
  name: string;

  hasLegs(): boolean;
  sitOn(): string;
}

export class ArtDecoSofa implements Sofa {
  name: string = "decorative sofa";

  hasLegs = (): boolean => true;
  sitOn = (): string => "Sitting on a decorative sofa.";
}

export class VictorianSofa implements Sofa {
  name: string = "victorian sofa";

  hasLegs = (): boolean => true;
  sitOn = (): string => "Sitting on a victorian sofa.";
}

export class ModernSofa implements Sofa {
  name: string = "modern sofa";

  hasLegs = (): boolean => false;
  sitOn = (): string => "Sitting on a modern sofa.";
}
