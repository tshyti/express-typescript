import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  get() {
    return 'hello kitties';
  }
}
