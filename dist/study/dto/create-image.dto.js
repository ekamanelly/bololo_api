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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateImageResponse = exports.CreateImageDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateImageDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'This value will be returned as the key of the object, so you can use this photo endpoint... profileUrl, studyPhoto can be used, but make sure to await the same value',
        type: String
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateImageDTO.prototype, "imageName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'image file',
        type: File
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", File)
], CreateImageDTO.prototype, "file", void 0);
exports.CreateImageDTO = CreateImageDTO;
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
//# sourceMappingURL=create-image.dto.js.map