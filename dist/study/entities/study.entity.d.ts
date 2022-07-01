import mongoose, { Document } from 'mongoose';
import { Doctor } from 'src/doctor/entities/doctor.entity';
export declare type StudyDocument = Study & Document;
export declare class Study {
    title: 'string';
    imageUrl: 'string';
    description: 'string';
    isDrafted: boolean;
    statusProperty: 'array of what?';
    typeProperty: 'array of what?';
    doctors: Doctor[];
    datePosted: number;
    isDeleted: boolean;
}
export declare const StudySchema: mongoose.Schema<Study, mongoose.Model<Study, any, any, any>, {}, {}, any>;
