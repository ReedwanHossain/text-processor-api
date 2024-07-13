import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTextDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'The quick brown fox jumps over the lazy dog.' })
  content: string;
}
