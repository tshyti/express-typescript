import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('/')
export default class IndexController {
  @Get()
  @Redirect('/api/swagger', 301)
  @ApiExcludeEndpoint()
  get() {
    return { url: '/api/swagger' };
  }
}
