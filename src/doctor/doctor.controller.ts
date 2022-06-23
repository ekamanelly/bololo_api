import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiQuery,
} from '@nestjs/swagger';
import { query } from 'express';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import {
  doctorDocs,
  UpdateNDeleteResponse,
} from './doctor-docs/controller.docs';
import { Doctor } from './entities/doctor.entity';
import { type } from 'os';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  @ApiBody({ description: doctorDocs.post.apiBody, type: CreateDoctorDto })
  @ApiCreatedResponse({ description: doctorDocs.post.response, type: Doctor })
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  @ApiQuery({
    required: false,
    name: 'search',
    description: 'the doctors name',
  })
  @ApiQuery({
    required: false,
    name: 'page',
    description: 'The pages',
  })
  @ApiCreatedResponse({ description: doctorDocs.get.response, type: [Doctor] })
  findAll(@Query('page') page: string, @Query('search') search: string) {
    // console.log(search)
    return this.doctorService.findAll(
      search,
      page && Number(page),
    );
  }

  @Get(':id')
  @ApiOperation({
    description: doctorDocs.get.params.id,
  })
  @ApiCreatedResponse({ description: doctorDocs.get.response, type: Doctor })
  findOne(@Param('id') _id: string) {
    return this.doctorService.findOne(_id);
  }

  @Patch(':id')
  @ApiParam({
    required: true,
    description: doctorDocs.delete.id,
    name: 'id',
  })
  @ApiBody({ description: doctorDocs.update.apiBody, type: UpdateDoctorDto })
  update(@Param('id') _id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update(_id, updateDoctorDto);
  }

  @Delete(':id')
  @ApiParam({
    required: true,
    description: doctorDocs.delete.id,
    name: 'id',
  })
  @ApiCreatedResponse({
    description: doctorDocs.delete.response,
    type: UpdateNDeleteResponse,
  })
  remove(@Param('id') _id: string) {
    return this.doctorService.remove(_id);
  }
}
