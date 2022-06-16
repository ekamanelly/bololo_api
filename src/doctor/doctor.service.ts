import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor, DoctorDocument } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name) private doctor: Model<DoctorDocument>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto) {
    try {
      const result = await this.doctor.create(createDoctorDto);
      return result;
    } catch (error) {
      throw new HttpException(
        'name already exist',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }

  async findAll(name={}, page = 1) {
    var perPage = 8;
    const totalDocs = await this.doctor.find({ isDeleted:false ,...name }).count();
    const totalPage = Math.ceil(totalDocs / perPage);
    // const name = search
    // cons
    return this.doctor
      .find({ isDeleted:false ,...name })
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

  async findOne(_id: string) {
    try {
      const result = await this.doctor.find({ _id, isDeleted: false });
      return result;
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
   
  }

  async update(_id: string, updateDoctorDto: UpdateDoctorDto) {
    try {
      const result = await this.doctor.updateOne({ _id }, updateDoctorDto);
      return {acknowledged: result.acknowledged};
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(_id: string) {
    // return 
    try {
      const result = await this.doctor.updateOne({ _id }, { isDeleted: true });
      return {acknowledged: result.acknowledged};
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }
}
