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
exports.StudyPropertyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_study_property_DTO_1 = require("./dto/create-study-property.DTO");
const studiy_property_entity_1 = require("./entities/studiy-property.entity");
const controller_1 = require("./study-docs/controller");
const study_service_1 = require("./study.service");
let StudyPropertyController = class StudyPropertyController {
    constructor(studyPropertyService) {
        this.studyPropertyService = studyPropertyService;
    }
    createStudyProperty(createStudyProperty) {
        return this.studyPropertyService.createStudyProperty(createStudyProperty);
    }
    getStudyProperty(tag) {
        return this.studyPropertyService.findStudyProperties(tag);
    }
    deleteStudyProperty(_id) {
        return this.studyPropertyService.removeProperty(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        type: create_study_property_DTO_1.CreateStudyPropertyDTO,
        description: controller_1.studyPropertyDocs.post.apiBody,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        type: studiy_property_entity_1.StudyProperty,
        description: controller_1.studyPropertyDocs.post.response,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_study_property_DTO_1.CreateStudyPropertyDTO]),
    __metadata("design:returntype", void 0)
], StudyPropertyController.prototype, "createStudyProperty", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: controller_1.studyPropertyDocs.get.response,
        type: [studiy_property_entity_1.StudyProperty],
    }),
    (0, swagger_1.ApiQuery)({
        required: false,
        name: 'tag',
        enum: create_study_property_DTO_1.StudyPropertyEnum,
        description: controller_1.studyPropertyDocs.get.query.tag,
    }),
    __param(0, (0, common_1.Query)('tag')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudyPropertyController.prototype, "getStudyProperty", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: controller_1.studyPropertyDocs.delete.params.id,
        required: true,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudyPropertyController.prototype, "deleteStudyProperty", null);
StudyPropertyController = __decorate([
    (0, common_1.Controller)('study-property'),
    __metadata("design:paramtypes", [study_service_1.StudyService])
], StudyPropertyController);
exports.StudyPropertyController = StudyPropertyController;
//# sourceMappingURL=study-property.controller.js.map