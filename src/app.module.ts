import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudyModule } from './study/study.module';
// import { StatusTypeModule } from './status-type/status-type.module';
import { DoctorModule } from './doctor/doctor.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gadolin:mqnizjC8pLOCTwk1@vorem.zly4i.mongodb.net/gadolin?retryWrites=true&w=majority'),
  // StudyModule,
  // DoctorModule,
  // StatusTypeModule,
  HotelModule

 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
