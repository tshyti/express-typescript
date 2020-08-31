import { FurrDensity } from './Cat.entity';

export default class CreateCatDto {
  name: string;
  birthDay: Date;
  furrDensity: FurrDensity;
}
