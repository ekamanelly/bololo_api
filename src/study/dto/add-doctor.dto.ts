import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AddDoctorToStudyDto {
    @IsNotEmpty()
    @ApiProperty({description: 'Capitalize first latter for better format'})
    doctorName:string
    @IsNotEmpty()
    @ApiProperty({description: ''})
    doctorId:string
}