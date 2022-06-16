import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor, DoctorDocument } from './entities/doctor.entity';
export declare class DoctorService {
    private doctor;
    constructor(doctor: Model<DoctorDocument>);
    create(createDoctorDto: CreateDoctorDto): Promise<Doctor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(name?: {}, page?: number): Promise<{
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
