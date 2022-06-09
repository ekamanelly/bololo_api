import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudyModule } from './study/study.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gadolin:mqnizjC8pLOCTwk1@vorem.zly4i.mongodb.net/gadolin?retryWrites=true&w=majority'),
  ConfigModule.forRoot({isGlobal:true}),
  
  StudyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
