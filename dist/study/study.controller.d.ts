/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
import { HttpException } from '@nestjs/common';
import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study } from './entities/study.entity';
import { DoctorService } from 'src/doctor/doctor.service';
import { AddDoctorToStudyDto } from './dto/add-doctor.dto';
export declare class StudyController {
    private readonly studyService;
    private readonly doctorService;
    constructor(studyService: StudyService, doctorService: DoctorService);
    create(createStudyDto: CreateStudyDto): Promise<Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(page: string, search: string, doctor: string): Promise<any[] | {
        docs: (Study & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        totalDocs: number;
        page: number;
        totalPage: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    }>;
    findOne(id: string): import("mongoose").Query<(Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/study.entity").StudyDocument>;
    update(id: string, updateStudyDto: UpdateStudyDto): Promise<{
        acknowledged: boolean;
    }>;
    remove(id: string): Promise<{
        acknowledged: boolean;
    }>;
    addToStudy(addDoctorStudy: AddDoctorToStudyDto, _id: string): Promise<{
        acknowledged: boolean;
        study: import("mongodb").UpdateResult;
    } | {
        acknowledged: boolean;
        study?: undefined;
    } | HttpException>;
    removeToStudy(studyId: string, doctorId: string): Promise<{
        acknowledged: boolean;
    }>;
}
