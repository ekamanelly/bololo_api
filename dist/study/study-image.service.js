"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_service_1 = require("../uitilities/cloudinary.service");
const streamifier = require('streamifier');
let ImageService = class ImageService {
    saveImageTOCloudinary(file) {
        return new Promise((resolve, reject) => {
            let stream = cloudinary_service_1.default.uploader.upload_stream({ public_id: this.customFileName(file), use_filename: true, unique_filename: false }, (error, result) => {
                if (result) {
                    resolve(result);
                }
                else {
                    reject(error);
                }
            });
            streamifier.createReadStream(file.buffer).pipe(stream);
        });
    }
    ;
    customFileName(file) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        return 'Gadolin' + '-' + uniqueSuffix;
    }
};
ImageService = __decorate([
    (0, common_1.Injectable)()
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=study-image.service.js.map