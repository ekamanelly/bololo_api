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
import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study } from './entities/study.entity';
export declare class StudyController {
    private readonly studyService;
    constructor(studyService: StudyService);
    create(createStudyDto: CreateStudyDto): Promise<Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(page: string, search: string): Promise<{
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
}
