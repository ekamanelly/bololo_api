import { Model } from 'mongoose';
import { DoctorDocument } from 'src/doctor/entities/doctor.entity';
import { StudyDocument } from './entities/study.entity';
export declare class StudyDoctorService {
    private study;
    private doctor;
    constructor(study: Model<StudyDocument>, doctor: Model<DoctorDocument>);
}
