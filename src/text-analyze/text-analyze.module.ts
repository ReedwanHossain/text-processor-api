import { Module } from '@nestjs/common';
import { TextAnalyzeService } from './text-analyze.service';
import { TextAnalyzeController } from './text-analyze.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Text, TextSchema } from './schemas/text.schema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Text.name, schema: TextSchema }]),
  ],
  providers: [TextAnalyzeService],
  controllers: [TextAnalyzeController],
})
export class TextAnalyzeModule {}
