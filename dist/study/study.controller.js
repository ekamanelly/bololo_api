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
exports.StudyController = void 0;
const common_1 = require("@nestjs/common");
const study_service_1 = require("./study.service");
const create_study_dto_1 = require("./dto/create-study.dto");
const update_study_dto_1 = require("./dto/update-study.dto");
const swagger_1 = require("@nestjs/swagger");
const study_entity_1 = require("./entities/study.entity");
const controller_1 = require("./study-docs/controller");
const doctor_service_1 = require("../doctor/doctor.service");
const add_doctor_dto_1 = require("./dto/add-doctor.dto");
let StudyController = class StudyController {
    constructor(studyService, doctorService) {
        this.studyService = studyService;
        this.doctorService = doctorService;
    }
    create(createStudyDto) {
        return this.studyService.create(createStudyDto);
    }
    async findAll(page, search, doctor) {
        let doctorCredential;
        if (doctor) {
            doctorCredential = await this.doctorService.find({ name: doctor });
            if (!doctorCredential) {
                return [];
            }
        }
        let doctorId = doctorCredential && doctorCredential._id;
        return this.studyService.findAll(search, doctorId, page && Number(page));
    }
    findOne(id) {
        return this.studyService.findOne(id);
    }
    update(id, updateStudyDto) {
        return this.studyService.update(id, updateStudyDto);
    }
    remove(id) {
        return this.studyService.remove(id);
    }
    async addToStudy(addDoctorStudy, _id) {
        const doctor = await this.doctorService.findOne(addDoctorStudy.doctorId);
        console.log(doctor[0]);
        if (doctor && doctor.length) {
            return this.studyService.addDoctor(_id, doctor[0]);
        }
        return new common_1.HttpException('doctor not found', common_1.HttpStatus.BAD_REQUEST);
    }
    removeToStudy(studyId, doctorId) {
        return this.studyService.removeDoctor(studyId, doctorId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ description: controller_1.studyDocs.post.apiBody, type: create_study_dto_1.CreateStudyDto }),
    (0, swagger_1.ApiCreatedResponse)({ description: controller_1.studyDocs.post.response, type: study_entity_1.Study }),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_study_dto_1.CreateStudyDto]),
    __metadata("design:returntype", void 0)
], StudyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        description: controller_1.studyDocs.get.query.page,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        description: controller_1.studyDocs.get.query.search,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'doctorName',
        description: controller_1.studyDocs.get.query.search,
        required: false,
    }),
    (0, swagger_1.ApiCreatedResponse)({ description: controller_1.studyDocs.get.response, type: [study_entity_1.Study] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], StudyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_study_dto_1.UpdateStudyDto]),
    __metadata("design:returntype", void 0)
], StudyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudyController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':studyId/doctors'),
    (0, swagger_1.ApiBody)({ description: controller_1.studyDocs.post.apiBody, type: add_doctor_dto_1.AddDoctorToStudyDto }),
    (0, swagger_1.ApiCreatedResponse)({ description: controller_1.studyDocs.post.response, type: study_entity_1.Study }),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('studyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_doctor_dto_1.AddDoctorToStudyDto, String]),
    __metadata("design:returntype", Promise)
], StudyController.prototype, "addToStudy", null);
__decorate([
    (0, common_1.Delete)(':studyId/doctors/:doctorId'),
    (0, swagger_1.ApiBody)({ description: controller_1.studyDocs.post.apiBody, type: create_study_dto_1.CreateStudyDto }),
    (0, swagger_1.ApiCreatedResponse)({ description: controller_1.studyDocs.post.response, type: study_entity_1.Study }),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Param)('studyId')),
    __param(1, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StudyController.prototype, "removeToStudy", null);
StudyController = __decorate([
    (0, common_1.Controller)('study'),
    __metadata("design:paramtypes", [study_service_1.StudyService,
        doctor_service_1.DoctorService])
], StudyController);
exports.StudyController = StudyController;
//# sourceMappingURL=study.controller.js.map