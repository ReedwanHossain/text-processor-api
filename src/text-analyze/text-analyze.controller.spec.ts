import { Test, TestingModule } from '@nestjs/testing';
import { TextAnalyzeController } from './text-analyze.controller';

describe('TextAnalyzeController', () => {
  let controller: TextAnalyzeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextAnalyzeController],
    }).compile();

    controller = module.get<TextAnalyzeController>(TextAnalyzeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
