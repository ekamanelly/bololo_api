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
import { CreateStudyPropertyDTO } from './dto/create-study-property.DTO';
import { StudyProperty } from './entities/studiy-property.entity';
import { StudyService } from './study.service';
export declare class StudyPropertyController {
    private readonly studyPropertyService;
    constructor(studyPropertyService: StudyService);
    createStudyProperty(createStudyProperty: CreateStudyPropertyDTO): Promise<StudyProperty & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getStudyProperty(tag: string): import("mongoose").Query<(StudyProperty & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], StudyProperty & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/studiy-property.entity").studyPropertyDocument>;
    deleteStudyProperty(_id: string): import("mongoose").Query<import("mongodb").UpdateResult, StudyProperty & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/studiy-property.entity").studyPropertyDocument>;
}
