import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import IndexController from './index.controller';

@Module({
  imports: [CatsModule],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
