import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import IndexController from './index.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }),
    CatsModule,
  ],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
