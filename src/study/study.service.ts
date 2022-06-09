import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study, StudyDocument } from './entities/study.entity';

@Injectable()
export class StudyService {

  constructor(@InjectModel(Study.name) private study: Model<StudyDocument>){}
  create(createStudyDto: CreateStudyDto) {
    createStudyDto.datePosted = new Date().getTime()
    return this.study.create(createStudyDto)
  }

  findAll({search, page="1"}) {
    return this.study.find({page, search})
  }

  findOne(_id: string) {
    return this.study.findById({_id, isDeleted :false})
  }

  update(id: number, updateStudyDto: UpdateStudyDto) {
    return `This action updates a #${id} study`;
  }

  remove(_id: string) {
    return this.study.updateOne({_id},{ isDeleted :true})
  }
}
