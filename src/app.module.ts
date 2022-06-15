import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudyModule } from './study/study.module';
// import { StatusTypeModule } from './status-type/status-type.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gadolin:mqnizjC8pLOCTwk1@vorem.zly4i.mongodb.net/gadolin?retryWrites=true&w=majority'),
  StudyModule,
  // StatusTypeModule,
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
