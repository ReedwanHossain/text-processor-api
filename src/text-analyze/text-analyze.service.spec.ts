import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TextAnalyzeService } from './text-analyze.service';
import { Text } from './text.schema';

describe('TextAnalyzeModule', () => {
  let service: TextAnalyzeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TextAnalyzeService,
        {
          provide: getModelToken(Text.name),
          useValue: {}, // Mocked model
        },
      ],
    }).compile();

    service = module.get<TextAnalyzeService>(TextAnalyzeService);
  });

  it('should count words correctly', async () => {
    const text = { content: 'The quick brown fox jumps over the lazy dog' };
    jest.spyOn(service, 'findOne').mockResolvedValue(text as any);

    expect(await service.countWords('some-id')).toBe(9);
  });

  it('should count characters correctly', async () => {
    const text = { content: 'The quick brown fox' };
    jest.spyOn(service, 'findOne').mockResolvedValue(text as any);

    expect(await service.countCharacters('some-id')).toBe(16);
  });

  it('should count sentences correctly', async () => {
    const text = { content: 'The quick brown fox. Jumps over the lazy dog.' };
    jest.spyOn(service, 'findOne').mockResolvedValue(text as any);
    expect(await service.countSentences('some-id')).toBe(2);
  });

  it('should count paragraphs correctly', async () => {
    const text = { content: 'The quick brown fox\n\nJumps over the lazy dog.' };
    jest.spyOn(service, 'findOne').mockResolvedValue(text as any);
    expect(await service.countParagraphs('some-id')).toBe(2);
  });

  it('should find the longest word correctly', async () => {
    const text = { content: 'The quick brown fox' };
    jest.spyOn(service, 'findOne').mockResolvedValue(text as any);
    expect(await service.findLongestWord('some-id')).toBe('quick');
  });
});
