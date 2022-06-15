import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudyPropertyDTO } from './dto/create-study-property.DTO';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import {
  StudyProperty,
  studyPropertyDocument,
} from './entities/studiy-property.entity';
import { Study, StudyDocument } from './entities/study.entity';

@Injectable()
export class StudyService {
  constructor(
    @InjectModel(Study.name) private study: Model<StudyDocument>,
    @InjectModel(StudyProperty.name)
    private studyProperty: Model<studyPropertyDocument>,
  ) {}
  create(createStudyDto: CreateStudyDto) {
    createStudyDto.datePosted = new Date().getTime();
    return this.study.create(createStudyDto);
  }

  findAll({ search, page = '1' }) {
    return this.study.find({ page, search });
  }

  findOne(_id: string) {
    return this.study.findById({ _id, isDeleted: false });
  }

  update(id: number, updateStudyDto: UpdateStudyDto) {
    return `This action updates a #${id} study`;
  }

  remove(_id: string) {
    return this.study.updateOne({ _id }, { isDeleted: true });
  }

  //study-property collection
  createStudyProperty(createStudyProperty: CreateStudyPropertyDTO) {
    const dateCreated = new Date().getTime();
    return this.studyProperty.create({ ...createStudyProperty, dateCreated });
  }
  findStudyProperties(tag: string) {
    if (tag) return this.studyProperty.find({ tag, isDeleted: false });
    else return this.studyProperty.find({ isDeleted: false });
  }
  removeProperty(_id: string) {
    return this.studyProperty.updateOne({ _id }, { isDeleted: true });
  }
}
