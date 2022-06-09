import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateStudyDto {
    @ApiProperty({
      required:true,
      description:'Please capitalized first letter'
    })
    @IsNotEmpty()
    title:"string"; 

    @IsNotEmpty()
    @ApiProperty({
        required:true,
        description:'url to cloud storage'
      })
    imageUrl: "string";

    @ApiProperty({
        required:true,
        description:'This might be an array of staring, one to represent a paragraph. but for now it just string'
      })
    @IsNotEmpty()
    description: "string";

    @ApiProperty({
        required:true,
        description:'The value decide if the study is publicly displayed, false by default '
      })
    @IsNotEmpty()
    isDrafted:boolean;

    @ApiProperty({
        required:true,
        description:' ? '
      })
    @IsNotEmpty()   
    status:'array of what?'
    datePosted: number;

}
