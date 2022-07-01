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
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor, DoctorDocument } from './entities/doctor.entity';
export declare class DoctorService {
    private doctor;
    constructor(doctor: Model<DoctorDocument>);
    find(param: any): import("mongoose").Query<(Doctor & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Doctor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, DoctorDocument>;
    create(createDoctorDto: CreateDoctorDto): Promise<Doctor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(query: string, page?: number): Promise<{
        docs: (Doctor & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        totalDocs: number;
        page: number;
        totalPage: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    }>;
    findOne(_id: string): Promise<(Doctor & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(_id: string, updateDoctorDto: UpdateDoctorDto): Promise<{
        acknowledged: boolean;
    }>;
    remove(_id: string): Promise<{
        acknowledged: boolean;
    }>;
}
