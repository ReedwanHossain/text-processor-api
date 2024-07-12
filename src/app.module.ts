import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TextAnalyzeModule } from './text-analyze/text-analyze.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(
        __dirname,
        `../.env.${process.env.NODE_ENV || 'dev'}`,
      ),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TextAnalyzeModule,
  ],
})
export class AppModule {}
