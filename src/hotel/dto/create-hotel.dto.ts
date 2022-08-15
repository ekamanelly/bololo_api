import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateHotelDto {
  @ApiProperty({
    // required: true,
    description: 'nome of your hotel',
  })
  @IsNotEmpty()
  name: String;

  @ApiProperty({
    // required: true,
    description: 'where',
  })
  @IsNotEmpty()
  address: String;

  @ApiProperty({
    // required: true,
    description: 'image sent by cloudinary storage',
  })
  @IsNotEmpty()
  imageUrl: String;

  @ApiProperty({
    // required: true,
    description: 'most likely would be provided by your user ',
  })
  rating: number;

  @ApiProperty({
    description: 'maybe when your hotel has gain more traffic',
  })
  socialHandles: string[];

}
