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
exports.StudyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const studiy_property_entity_1 = require("./entities/studiy-property.entity");
const study_entity_1 = require("./entities/study.entity");
let StudyService = class StudyService {
    constructor(study, studyProperty) {
        this.study = study;
        this.studyProperty = studyProperty;
    }
    create(createStudyDto) {
        createStudyDto.datePosted = new Date().getTime();
        return this.study.create(createStudyDto);
    }
    findAll({ search, page = '1' }) {
        return this.study.find({ page, search });
    }
    findOne(_id) {
        return this.study.findById({ _id, isDeleted: false });
    }
    update(id, updateStudyDto) {
        return `This action updates a #${id} study`;
    }
    remove(_id) {
        return this.study.updateOne({ _id }, { isDeleted: true });
    }
    createStudyProperty(createStudyProperty) {
        const dateCreated = new Date().getTime();
        return this.studyProperty.create(Object.assign(Object.assign({}, createStudyProperty), { dateCreated }));
    }
    findStudyProperties(tag) {
        if (tag)
            return this.studyProperty.find({ tag, isDeleted: false });
        else
            return this.studyProperty.find({ isDeleted: false });
    }
    removeProperty(_id) {
        return this.studyProperty.updateOne({ _id }, { isDeleted: true });
    }
};
StudyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(study_entity_1.Study.name)),
    __param(1, (0, mongoose_1.InjectModel)(studiy_property_entity_1.StudyProperty.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], StudyService);
exports.StudyService = StudyService;
//# sourceMappingURL=study.service.js.map