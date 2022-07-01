import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from 'src/doctor/entities/doctor.entity';
import { Study, StudyDocument } from './entities/study.entity';

@Injectable()
export class StudyDoctorService {
  constructor(
    @InjectModel(Study.name) private study: Model<StudyDocument>,
    @InjectModel(Doctor.name) private doctor: Model<DoctorDocument>,
  ) {}

}
