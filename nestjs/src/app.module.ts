import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import IndexController from './index.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL),
    CatsModule,
  ],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
