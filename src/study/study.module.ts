import { Module } from '@nestjs/common';
import { StudyService } from './study.service';
import { StudyController } from './study.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Study, StudySchema } from './entities/study.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: Study.name, schema: StudySchema }])],
  controllers: [StudyController],
  providers: [StudyService]
})
export class StudyModule {}
