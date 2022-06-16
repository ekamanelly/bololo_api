"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyImageController = exports.CreateImageResponse = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const study_image_service_1 = require("./study-image.service");
class CreateImageResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'this field is dynamic and will be what you sent as ImageName, make sure to await the same value. it value will be the imageUrl',
        type: String
    }),
    __metadata("design:type", String)
], CreateImageResponse.prototype, "dynamicName", void 0);
exports.CreateImageResponse = CreateImageResponse;
let StudyImageController = class StudyImageController {
    constructor(studyImageService) {
        this.studyImageService = studyImageService;
    }
    async uploadFile(file, imageName) {
        console.log({ file });
        file.fieldname = 'profile1';
        const result = await this.studyImageService.saveImageTOCloudinary(file);
        return { [imageName]: result.secure_url };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                imageName: { type: 'string', description: 'you should get this value in the object body' },
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'A response with the imageName value you specified for the apiBody',
        type: CreateImageResponse,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('imageName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StudyImageController.prototype, "uploadFile", null);
StudyImageController = __decorate([
    (0, common_1.Controller)('photo'),
    __metadata("design:paramtypes", [study_image_service_1.ImageService])
], StudyImageController);
exports.StudyImageController = StudyImageController;
//# sourceMappingURL=study-image-controller.js.map