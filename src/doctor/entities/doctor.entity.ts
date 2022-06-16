import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';


import { Document } from "mongoose";

export type DoctorDocument = Doctor & Document


@Schema()
export class Doctor {
  @ApiProperty({
    // required: true,
    description: 'Please capitalized first letters',
  })
  @Prop({unique:true})
  name: String;

  @ApiProperty({
    // required: true,
    description: 'time in javascript numbers',
  })
  @Prop({default:new Date().getTime()})
  dateCreate: Number;

  @ApiProperty({
    // required: true,
    description: 'time in javascript numbers',
  })
  @Prop({default:new Date().getTime()})
  dateUpdated: Number;

  @ApiProperty({
    // required: true,
    description: '',
  })
  @Prop({default:false})
  isDeleted: boolean;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
