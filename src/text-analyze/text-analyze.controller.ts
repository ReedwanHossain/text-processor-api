import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TextAnalyzeService } from './text-analyze.service';
import { CreateTextDto } from './dto/text-analyze.dto';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('text')
@Controller('text')
export class TextAnalyzeController {
  constructor(private readonly textService: TextAnalyzeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new paragraph' })
  @ApiBody({ type: CreateTextDto })
  @ApiResponse({
    status: 201,
    description: 'The paragraph has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async create(@Body() createTextDto: CreateTextDto) {
    return this.textService.create(createTextDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all paragraphs' })
  @ApiResponse({ status: 200, description: 'Return all paragraphs.' })
  async findAll() {
    return await this.textService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a paragraph by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Paragraph ID' })
  @ApiResponse({ status: 200, description: 'Return a paragraph by ID.' })
  @ApiResponse({ status: 404, description: 'Paragraph not found.' })
  async findOne(@Param('id') id: string) {
    return await this.textService.findOne(id);
  }

  @Get(':id/words')
  @ApiOperation({ summary: 'Get word count of a paragraph' })
  @ApiParam({ name: 'id', required: true, description: 'Paragraph ID' })
  @ApiResponse({ status: 200, description: 'Return word count.' })
  @ApiResponse({ status: 404, description: 'Paragraph not found.' })
  async countWords(@Param('id') id: string) {
    const count = await this.textService.countWords(id);
    return {
      count,
    };
  }

  @Get(':id/characters')
  @ApiOperation({ summary: 'Get character count of a paragraph' })
  @ApiParam({ name: 'id', required: true, description: 'Paragraph ID' })
  @ApiResponse({ status: 200, description: 'Return character count.' })
  @ApiResponse({ status: 404, description: 'Paragraph not found.' })
  async countCharacters(@Param('id') id: string) {
    const count = await this.textService.countCharacters(id);
    return {
      count,
    };
  }

  @Get(':id/sentences')
  @ApiOperation({ summary: 'Get sentence count of a paragraph' })
  @ApiParam({ name: 'id', required: true, description: 'Paragraph ID' })
  @ApiResponse({ status: 200, description: 'Return sentence count.' })
  @ApiResponse({ status: 404, description: 'Paragraph not found.' })
  async countSentences(@Param('id') id: string) {
    const count = await this.textService.countSentences(id);
    return {
      count,
    };
  }

  @Get(':id/paragraphs')
  @ApiOperation({ summary: 'Get paragraph count of a text' })
  @ApiParam({ name: 'id', required: true, description: 'Text ID' })
  @ApiResponse({ status: 200, description: 'Return paragraph count.' })
  @ApiResponse({ status: 404, description: 'Text not found.' })
  async countParagraphs(@Param('id') id: string) {
    const count = await this.textService.countParagraphs(id);
    return {
      count,
    };
  }

  @Get(':id/longest-word')
  @ApiOperation({ summary: 'Get longest word of a paragraph' })
  @ApiParam({ name: 'id', required: true, description: 'Paragraph ID' })
  @ApiResponse({ status: 200, description: 'Return longest word.' })
  @ApiResponse({ status: 404, description: 'Paragraph not found.' })
  async findLongestWord(@Param('id') id: string) {
    const longestWord = await this.textService.findLongestWord(id);
    return {
      longestWord,
    };
  }
}
