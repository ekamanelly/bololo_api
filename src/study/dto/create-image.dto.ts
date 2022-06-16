import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";




export class CreateImageDTO {
    @ApiProperty({
        required:true,
        description:'This value will be returned as the key of the object, so you can use this photo endpoint... profileUrl, studyPhoto can be used, but make sure to await the same value', 
        type:String   
      })
      @IsNotEmpty()
      imageName: string; 
      @ApiProperty({
        required:true,
        description:'image file',
        type:File
      })
      @IsNotEmpty()
      file: File; 

}

export class CreateImageResponse {
    @ApiProperty({
        required:true,
        description:'this field is dynamic and will be what you sent as ImageName, make sure to await the same value. it value will be the imageUrl', 
        type:String   
      })
      dynamicName: string; 
}