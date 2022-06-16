import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiProperty } from '@nestjs/swagger';
import { CreateImageDTO } from './dto/create-image.dto';
import { ImageService } from './study-image.service';


export class CreateImageResponse {
  @ApiProperty({
      required:true,
      description:'this field is dynamic and will be what you sent as ImageName, make sure to await the same value. it value will be the imageUrl', 
      type:String   
    })
    dynamicName: string; 
}
@Controller('photo')
export class StudyImageController {
  constructor(private readonly studyImageService: ImageService) {}
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody(
    {
      schema: {
        type: 'object',
        properties: {
          imageName: { type: 'string', description:'you should get this value in the object body' },
          file: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
    // {

    // type: CreateImageDTO,
  )
  @ApiCreatedResponse({
    description:
      'A response with the imageName value you specified for the apiBody',
    type:CreateImageResponse,
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('imageName') imageName: string,
  ) {
    console.log({ file });
    file.fieldname = 'profile1';
    const result: any = await this.studyImageService.saveImageTOCloudinary(
      file,
    );
    return { [imageName]: result.secure_url };
  }
}
