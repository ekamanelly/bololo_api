import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from './entities/hotel.entity';

@Module({
  controllers: [HotelController],
  imports:[MongooseModule .forFeature([{
    name:Hotel.name,schema:HotelSchema
  }])],
  providers: [HotelService]
})
export class HotelModule {}
