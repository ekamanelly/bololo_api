import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(createDoctorDto: CreateDoctorDto): Promise<Doctor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(page: string, search: string): Promise<{
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
