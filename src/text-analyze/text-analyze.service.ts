import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Text } from './schemas/text.schema';
import { CreateTextDto } from './dto/text-analyze.dto';

@Injectable()
export class TextAnalyzeService {
  constructor(
    @InjectModel(Text.name)
    private readonly textModel: Model<Text>,
  ) {}

  async create(createTextDto: CreateTextDto): Promise<Text> {
    const createdText = new this.textModel(createTextDto);
    return createdText.save();
  }

  async findAll(): Promise<Text[]> {
    return this.textModel.find().exec();
  }

  async findOne(id: string): Promise<Text> {
    return this.textModel.findById(id).exec();
  }

  async countWords(id: string): Promise<number> {
    const text = await this.findOne(id);
    return text.content.split(/\s+/).length;
  }

  async countCharacters(id: string): Promise<number> {
    const text = await this.findOne(id);
    return text.content.replace(/\s+/g, '').length;
  }

  async countSentences(id: string): Promise<number> {
    const text = await this.findOne(id);
    return text.content.split(/[.!?]/).filter(Boolean).length;
  }

  async countParagraphs(id: string): Promise<number> {
    const text = await this.findOne(id);
    return text.content.split(/\n\n+/).length;
  }

  async findLongestWord(id: string): Promise<string> {
    const text = await this.findOne(id);
    return text.content
      .split(/\s+/)
      .reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        '',
      );
  }
}
