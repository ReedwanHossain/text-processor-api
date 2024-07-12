import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Text extends Document {
  @Prop({ required: true })
  content: string;
}

export const TextSchema = SchemaFactory.createForClass(Text);
