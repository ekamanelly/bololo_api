// export class Study {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { Doctor } from 'src/doctor/entities/doctor.entity';

export type StudyDocument = Study & Document;

@Schema()
export class Study {
  @ApiProperty({
    //   required:true,
    description: 'Please capitalized first letter',
  })
  @Prop()
  title: 'string';

  @Prop()
  @ApiProperty({
    // required:true,
    description: 'url to cloud storage',
  })
  imageUrl: 'string';

  @ApiProperty({
    // required:true,
    description:
      'This might be an array of staring, one to represent a paragraph. but for now it just string',
  })
  @Prop()
  description: 'string';

  @ApiProperty({
    // required:true,
    description:
      'The value decide if the study is publicly displayed, false by default ',
  })
  @Prop({ default: true })
  isDrafted: boolean;

  @ApiProperty({
    // required:true,
    description: ' ? ',
  })
  @Prop()
  statusProperty: 'array of what?';

  @ApiProperty({
    // required:true,
    description: ' ? ',
  })
  @Prop()
  typeProperty: 'array of what?';

  @ApiProperty({
    // required:true,
    description:
      ' date from the server side, and number you can convert to  js data ',
  })
  @Prop({  unique:true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: Doctor.name, }] })
  doctors: Doctor[];

  @ApiProperty({
    // required:true,
    description:
      ' date from the server side, and number you can convert to  js data ',
  })
  @Prop({ default: new Date().getTime() })
  datePosted: number;

  @ApiProperty({
    description: '',
  })
  @Prop({ default: false })
  isDeleted: boolean;
}

export const StudySchema = SchemaFactory.createForClass(Study);
