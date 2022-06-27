import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import {
  CreateStudyPropertyDTO,
  StudyPropertyEnum,
} from './dto/create-study-property.DTO';
import {
  StudyProperty,
  studyPropertySchema,
} from './entities/studiy-property.entity';
import { studyPropertyDocs } from './study-docs/controller';
import { StudyService } from './study.service';
//
@Controller('study-property')
export class StudyPropertyController {
  constructor(private readonly studyPropertyService: StudyService) {}

  @Post()
  @ApiBody({
    type: CreateStudyPropertyDTO,
    description: studyPropertyDocs.post.apiBody,
  })
  @ApiCreatedResponse({
    type: StudyProperty,
    description: studyPropertyDocs.post.response,
  })
  createStudyProperty(@Body() createStudyProperty: CreateStudyPropertyDTO) {
    return this.studyPropertyService.createStudyProperty(createStudyProperty);
  }

  @Get()
  @ApiCreatedResponse({
    description: studyPropertyDocs.get.response,
    type: [StudyProperty],
  })
  @ApiQuery({
    required: false,
    name: 'tag',
    enum: StudyPropertyEnum,
    description: studyPropertyDocs.get.query.tag,
  })
  getStudyProperty(@Query('tag') tag: string) {
    return this.studyPropertyService.findStudyProperties(tag);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: studyPropertyDocs.delete.params.id,
    required: true,
  })
  deleteStudyProperty(@Param('id') _id: string) {
    return this.studyPropertyService.removeProperty(_id);
  }
}
