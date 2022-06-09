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
import { Model } from 'mongoose';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study, StudyDocument } from './entities/study.entity';
export declare class StudyService {
    private study;
    constructor(study: Model<StudyDocument>);
    create(createStudyDto: CreateStudyDto): Promise<Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll({ search, page }: {
        search: any;
        page: any;
    }): import("mongoose").Query<(Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, StudyDocument>;
    findOne(_id: string): import("mongoose").Query<Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, StudyDocument>;
    update(id: number, updateStudyDto: UpdateStudyDto): string;
    remove(_id: string): import("mongoose").Query<import("mongodb").UpdateResult, Study & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, StudyDocument>;
}
