import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import Cat, { FurrDensity } from './models/Cat.entity';
import CreateCatDto from './models/CreateCat.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { API_VERSION_ONE } from 'src/common/constants';

@ApiTags(`${API_VERSION_ONE}cats`)
@Controller(`${API_VERSION_ONE}cats`)
export default class CatsController {
  private id = 0;

  @Get(':id')
  @ApiParam({ type: 'integer', name: 'id' })
  get(@Param('id', new ParseIntPipe()) id): Cat {
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
