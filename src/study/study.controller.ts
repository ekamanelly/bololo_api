import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { Study } from './entities/study.entity';
import { studyDocs } from './study-docs/controller';
import { StudyDoctorService } from './study-doctor.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { DoctorDocument } from 'src/doctor/entities/doctor.entity';
import { AddDoctorToStudyDto } from './dto/add-doctor.dto';

@Controller('study')
export class StudyController {
  constructor(
    private readonly studyService: StudyService,
    private readonly doctorService: DoctorService,
    // private readonly studyDoctorService: StudyDoctorService,
  ) {}

  @Post()
  @ApiBody({ description: studyDocs.post.apiBody, type: CreateStudyDto })
  @ApiCreatedResponse({ description: studyDocs.post.response, type: Study })
  @ApiBadRequestResponse()
  create(@Body() createStudyDto: CreateStudyDto) {
    return this.studyService.create(createStudyDto);
  }

  @Get()
  @ApiQuery({
    name: 'page',
    description: studyDocs.get.query.page,
    required: false,
  })
  @ApiQuery({
    name: 'search',
    description: studyDocs.get.query.search,
    required: false,
  })
  @ApiQuery({
    name: 'doctorName',
    description: studyDocs.get.query.search,
    required: false,
  })
  @ApiCreatedResponse({ description: studyDocs.get.response, type: [Study] })
  async findAll(@Query('page') page: string, @Query('search') search: string, @Query('search') doctor: string) {
    let doctorCredential
    if(doctor){
       doctorCredential =await  this.doctorService.find({name:doctor})
      if(!doctorCredential){
        return []
      }
    }
    let doctorId = doctorCredential&& doctorCredential._id
    return this.studyService.findAll(search,doctorId, page && Number(page));
  }
  // ??

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudyDto: UpdateStudyDto) {
    return this.studyService.update(id, updateStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studyService.remove(id);
  }

  @Post(':studyId/doctors')
  @ApiBody({ description: studyDocs.post.apiBody, type: AddDoctorToStudyDto })
  @ApiCreatedResponse({ description: studyDocs.post.response, type: Study })
  @ApiBadRequestResponse()
  async addToStudy(@Body() addDoctorStudy: AddDoctorToStudyDto, @Param('studyId') _id: string) {
    const doctor: any  =await  this.doctorService.findOne(addDoctorStudy.doctorId)
    console.log(doctor[0])
    if(doctor && doctor.length){
      return this.studyService.addDoctor(_id, doctor[0]);
    }
    return new HttpException('doctor not found', HttpStatus.BAD_REQUEST)
  }
  @Delete(':studyId/doctors/:doctorId')
  @ApiBody({ description: studyDocs.post.apiBody, type: CreateStudyDto })
  @ApiCreatedResponse({ description: studyDocs.post.response, type: Study })
  @ApiBadRequestResponse()
  removeToStudy(
    @Param('studyId') studyId: string,
    @Param('doctorId') doctorId: string,
  ) {
    return this.studyService.removeDoctor(studyId, doctorId);
  }
}
