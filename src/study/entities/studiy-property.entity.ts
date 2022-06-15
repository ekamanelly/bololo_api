// export class Study {}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type studyPropertyDocument = StudyProperty & Document


@Schema()
export class StudyProperty {
    @ApiProperty({
      required:true,
      description:'Please capitalized first letter, the property of study'
    })
    @Prop()
    tag:"string"; 

    @Prop()
    @ApiProperty({
        required:true,
        // description:'url to cloud storage'
      })
    text: "string";
    @ApiProperty({
        // required:true,
        // description:'The value removes this from the collection, false by default '
      })
    @Prop({default:false})
    isDeleted:boolean;

    @ApiProperty({
        // required:true,
        // description:' date from the server side, and number you can convert to  js data '
      })
    @Prop()
    dateCreated: number;

}

export const studyPropertySchema = SchemaFactory.createForClass(StudyProperty);