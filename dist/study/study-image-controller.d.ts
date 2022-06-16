/// <reference types="multer" />
import { ImageService } from './study-image.service';
export declare class CreateImageResponse {
    dynamicName: string;
}
export declare class StudyImageController {
    private readonly studyImageService;
    constructor(studyImageService: ImageService);
    uploadFile(file: Express.Multer.File, imageName: string): Promise<{
        [x: string]: any;
    }>;
}
