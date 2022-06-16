import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateDoctorDto {
    @IsNotEmpty()
    @ApiProperty({description: 'Capitalize first latter for better format'})
    name:String
}
