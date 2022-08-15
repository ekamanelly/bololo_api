import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel, HotelDocument } from './entities/hotel.entity';

@Injectable()
export class HotelService {

  constructor(
    @InjectModel(Hotel.name) private hotel: Model<HotelDocument>,
  ) {}

  create(createHotelDto: CreateHotelDto) {
    const hotelObj = {...createHotelDto, rating:3 }
    return this.hotel.create(hotelObj)
  }

  findAll() {
    return this.hotel.find({isDeleted: false });
  }

 async findOne(_id: string) {
    try {
      const result = await this.hotel.find({ _id, isDeleted: false });
      return result;
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }

  async update(_id: string, updateHotelDto: UpdateHotelDto) {
    try {
      const result = await this.hotel.updateOne({ _id }, updateHotelDto);
      return { acknowledged: result.acknowledged };
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(_id: string) {
    try {
      const result = await this.hotel.updateOne({ _id }, {isDeleted: true });
      return { acknowledged: result.acknowledged };
    } catch (error) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }
}
