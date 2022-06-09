import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiQuery, ApiResponse } from '@nestjs/swagger';
import * as docs from './study-docs/controller.json'
import { Study } from './entities/study.entity';
import { query } from 'express';

@Controller('study')
export class StudyController {
  constructor(private readonly studyService: StudyService) {}

  @Post()
  @ApiBody({description:docs.post.apiBody, type:CreateStudyDto})
  @ApiCreatedResponse({description:docs.post.response, type:Study})
  @ApiBadRequestResponse()
  create(@Body() createStudyDto: CreateStudyDto) {
    return this.studyService.create(createStudyDto);
  }

  @Get()
  @ApiQuery({name:'page', description:docs.get.query.page})
  @ApiQuery({name:'search', description:docs.get.query.search})
  @ApiCreatedResponse({description:docs.get.response, type:[Study]})
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
