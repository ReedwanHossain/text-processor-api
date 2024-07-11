import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Text } from './text.schema';

@Injectable()
export class TextAnalyzeService {
  constructor(
    @InjectModel(Text.name)
    private readonly textModel: Model<Text>,
  ) {}
}
