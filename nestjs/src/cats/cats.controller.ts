import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import Cat, { FurrDensity } from './models/Cat.entity';
import CreateCatDto from './models/CreateCat.dto';

@Controller('cats')
export default class CatsController {
  private id = 0;

  @Get(':id')
  get(@Param() { id }): Cat {
    const kitty: Cat = {
      id,
      birthDay: new Date(),
      furrDensity: FurrDensity.Extreme,
      name: 'Mittens',
    };
    return kitty;
  }

  @Post()
  post(@Body() createCatDto: CreateCatDto): Cat {
    const createdCat: Cat = { ...createCatDto, id: ++this.id };
    return createdCat;
  }
}
