import { Module } from '@nestjs/common';
import { StudyService } from './study.service';
import { StudyController } from './study.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Study, StudySchema } from './entities/study.entity';
import {
  StudyProperty,
  studyPropertySchema,
} from './entities/studiy-property.entity';
import { StudyPropertyController } from './study-property.controller';
import { StudyImageController } from './study-image-controller';
import { ImageService } from './study-image.service';

@Module({
  imports: [ 
    MongooseModule.forFeature([ 
      { name: Study.name, schema: StudySchema },
      { name: StudyProperty.name, schema: studyPropertySchema },
    ]),
  ],
  controllers: [StudyController, StudyPropertyController, StudyImageController],
  providers: [StudyService, ImageService,],
})
export class StudyModule {}
