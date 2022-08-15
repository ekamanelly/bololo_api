import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @ApiProperty({
    // required: true,
    description: 'Please capitalized first letters',
  })
  @Prop({ unique: true })
  name: String;

  @ApiProperty({
    // required: true,
    description: 'Please capitalized first letters',
  })
  @Prop({ unique: true })
  address: String;

  @ApiProperty({
    // required: true,
    description: 'Please capitalized first letters',
  })
  @Prop()
  imageUrl: String;

  @ApiProperty({
    // required: true,
    description: 'Please capitalized first letters',
  })
  @Prop()
  rating:number;


  @ApiProperty({
    // required: true,
    description: 'Please capitalized first letters',
  })
  @Prop()
  socialHandles:number;

  @ApiProperty({
    // required: true,
    description: 'time in javascript numbers',
  })
  @Prop({ default: new Date().getTime() })
  dateCreate: Number;

  @ApiProperty({
    // required: true,
    description: 'time in javascript numbers',
  })
  @Prop({ default: new Date().getTime() })
  dateUpdated: Number;

  @ApiProperty({
    // required: true,
    description: '',
  })
  @Prop({ default: false })
  isDeleted: boolean;
}


export const HotelSchema = SchemaFactory.createForClass(Hotel);