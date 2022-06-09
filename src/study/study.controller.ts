import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiQuery, ApiResponse } from '@nestjs/swagger';
// import {studyDocs} from './study-docs/controller.js'
import { Study } from './entities/study.entity';
import { studyDocs } from './study-docs/controller';




@Controller('study')
export class StudyController {
  constructor(private readonly studyService: StudyService) {}

  @Post()
  @ApiBody({description:studyDocs.post.apiBody, type:CreateStudyDto})
  @ApiCreatedResponse({description:studyDocs.post.response, type:Study})
  @ApiBadRequestResponse()
  create(@Body() createStudyDto: CreateStudyDto) {
    return this.studyService.create(createStudyDto);
  }

  @Get()
  @ApiQuery({name:'page', description:studyDocs.get.query.page, required:false})
  @ApiQuery({name:'search', description:studyDocs.get.query.search, required:false})
  @ApiCreatedResponse({description:studyDocs.get.response, type:[Study]})
  findAll(@Query('page')page:string, @Query('search') search: string  ) {
    return this.studyService.findAll({page, search});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudyDto: UpdateStudyDto) {
    return this.studyService.update(+id, updateStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studyService.remove(id);
  }
}
