import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoctorDocument } from 'src/doctor/entities/doctor.entity';
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

  async findAll(search: string, doctorId: string, page = 1) {
    let name = {};
    if (search) {
      name = {
        $or: [
          { description: { $regex: search, $options: 'i' } },
          { title: { $regex: search, $options: 'i' } },
        ],
      };
    } else if (doctorId) {
      name = {
         doctors: { $in: doctorId } 
      };
    }
    search;

    var perPage = 8;
    const totalDocs = await this.study
      .find({ isDeleted: false, ...name })
      .count();
    const totalPage = Math.ceil(totalDocs / perPage);

    return this.study
      .find({ isDeleted: false, ...name })
      .sort({ date: 'asc' })
      .limit(perPage)
      .skip(perPage * (page - 1))
      .then((docs) => {
        return {
          docs,
          totalDocs,
          page,
          totalPage,
          hasNextPage: page < totalPage,
          hasPrevPage: page > 1,
        };
      })
      .catch((err) => {
        throw new HttpException(
          'Server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  findOne(_id: string) {
    return this.study.find({ _id, isDeleted: false });
  }

  async update(_id: string, updateStudyDto: UpdateStudyDto) {
    try {
      const result = await this.study.updateOne({ _id }, updateStudyDto);
      return { acknowledged: result.acknowledged };
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(_id: string) {
    try {
      const result = await this.study.updateOne({ _id }, { isDeleted: true });
      return { acknowledged: result.acknowledged };
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }

  //study-property service
  createStudyProperty(createStudyProperty: CreateStudyPropertyDTO) {
    const dateCreated = new Date().getTime();
    return this.studyProperty.create({ ...createStudyProperty, dateCreated });
  }
  findStudyProperties(tag: string) {
    try {
      if (tag) return this.studyProperty.find({ tag, isDeleted: false });
      else return this.studyProperty.find({ isDeleted: false });
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }
  async removeProperty(_id: string) {
    try {
      const result = await this.studyProperty.updateOne(
        { _id },
        { isDeleted: true },
      );
      return { acknowledged: result.acknowledged };
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    // return ;
  }

  async addDoctor(_id: string, doctor: DoctorDocument) {
    try {
      const study = await this.study.updateOne(
        { _id },
        { $push: { doctors: doctor._id } },
      );
      return { acknowledged: true, study };
    } catch (error) {
      console.log(error);
      return { acknowledged: false };
    }
  }
  async removeDoctor(_id: string, doctorId: string) {
    try {
      const study = await this.study.updateOne(
        { _id },
        { $pull: { doctors: doctorId } },
      );
      return { acknowledged: true };
    } catch (error) {
      return { acknowledged: false };
    }
  }
}
