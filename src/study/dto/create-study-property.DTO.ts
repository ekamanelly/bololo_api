import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

export enum StudyPropertyEnum {
    statusProperty= 'statusProperty',
    typeProperty= 'typeProperty',
}

export class CreateStudyPropertyDTO {
    @ApiProperty({
        required:true,
        description:'This will have the just the possible value of the enum',
        enum: StudyPropertyEnum    
      })
      @IsEnum(StudyPropertyEnum)
      tag: string; 
      @ApiProperty({
        required:true,
        description:'This will be the dynamic date from the user and should be a string'
      })
      @IsNotEmpty()
      text: string; 

}