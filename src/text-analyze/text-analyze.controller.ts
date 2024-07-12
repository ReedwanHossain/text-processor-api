import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TextAnalyzeService } from './text-analyze.service';
import { CreateTextDto } from './dto/text-analyze.dto';

@Controller('text')
export class TextAnalyzeController {
  constructor(private readonly textService: TextAnalyzeService) {}

  @Post()
  async create(@Body() createTextDto: CreateTextDto) {
    return this.textService.create(createTextDto);
  }

  @Get()
  async findAll() {
    return await this.textService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.textService.findOne(id);
  }

  @Get(':id/words')
  async countWords(@Param('id') id: string) {
    const count = await this.textService.countWords(id);
    return {
      count,
    };
  }

  @Get(':id/characters')
  async countCharacters(@Param('id') id: string) {
    const count = await this.textService.countCharacters(id);
    return {
      count,
    };
  }

  @Get(':id/sentences')
  async countSentences(@Param('id') id: string) {
    const count = await this.textService.countSentences(id);
    return {
      count,
    };
  }

  @Get(':id/paragraphs')
  async countParagraphs(@Param('id') id: string) {
    const count = await this.textService.countParagraphs(id);
    return {
      count,
    };
  }

  @Get(':id/longest-word')
  async findLongestWord(@Param('id') id: string) {
    const longestWord = await this.textService.findLongestWord(id);
    return {
      longestWord,
    };
  }
}
