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
exports.CreateStudyPropertyDTO = exports.StudyPropertyEnum = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var StudyPropertyEnum;
(function (StudyPropertyEnum) {
    StudyPropertyEnum["status"] = "status";
    StudyPropertyEnum["property"] = "property";
})(StudyPropertyEnum = exports.StudyPropertyEnum || (exports.StudyPropertyEnum = {}));
class CreateStudyPropertyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'This will have the just the possible value of the enum',
        enum: StudyPropertyEnum
    }),
    (0, class_validator_1.IsEnum)(StudyPropertyEnum),
    __metadata("design:type", String)
], CreateStudyPropertyDTO.prototype, "tag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'This will be the dynamic date from the user and should be a string'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudyPropertyDTO.prototype, "text", void 0);
exports.CreateStudyPropertyDTO = CreateStudyPropertyDTO;
//# sourceMappingURL=create-study-property.DTO.js.map