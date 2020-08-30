import { FurrDensity } from './Cat.entity';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateCatDto {
  name: string;
  birthDay: Date;
  furrDensity: FurrDensity;
}
