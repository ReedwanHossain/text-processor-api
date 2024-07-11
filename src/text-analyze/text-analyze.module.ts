import { Module } from '@nestjs/common';
import { TextAnalyzeService } from './text-analyze.service';
import { TextAnalyzeController } from './text-analyze.controller';

@Module({
  providers: [TextAnalyzeService],
  controllers: [TextAnalyzeController]
})
export class TextAnalyzeModule {}
