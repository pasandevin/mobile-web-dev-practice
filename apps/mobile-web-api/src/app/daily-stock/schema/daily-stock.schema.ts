import { IDailyStock } from '@mobile-web-dev-practice/model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class DailyStock implements IDailyStock {
  @Prop() date: Date;
  @Prop() amount: number;
}

export type DailyStockDocument = HydratedDocument<DailyStock>;
export const DailyStockSchema = SchemaFactory.createForClass(DailyStock);
