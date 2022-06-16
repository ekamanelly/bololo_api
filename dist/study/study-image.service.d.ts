/// <reference types="multer" />
export declare class ImageService {
    saveImageTOCloudinary(file: Express.Multer.File): Promise<unknown>;
    customFileName(file: any): string;
}
