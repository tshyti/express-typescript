export default class Cat {
  id: number;
  name: string;
  birthDay: Date;
  furrDensity: FurrDensity;
}

export enum FurrDensity {
  Georgeous,
  Extreme,
}
