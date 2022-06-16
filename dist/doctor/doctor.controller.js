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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const doctor_service_1 = require("./doctor.service");
const create_doctor_dto_1 = require("./dto/create-doctor.dto");
const update_doctor_dto_1 = require("./dto/update-doctor.dto");
const controller_docs_1 = require("./doctor-docs/controller.docs");
const doctor_entity_1 = require("./entities/doctor.entity");
let DoctorController = class DoctorController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    create(createDoctorDto) {
        return this.doctorService.create(createDoctorDto);
    }
    findAll(page, search) {
        console.log(search);
        return this.doctorService.findAll(search && { name: search }, page && Number(page));
    }
    findOne(_id) {
        return this.doctorService.findOne(_id);
    }
    update(_id, updateDoctorDto) {
        return this.doctorService.update(_id, updateDoctorDto);
    }
    remove(_id) {
        return this.doctorService.remove(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ description: controller_docs_1.doctorDocs.post.apiBody, type: create_doctor_dto_1.CreateDoctorDto }),
    (0, swagger_1.ApiCreatedResponse)({ description: controller_docs_1.doctorDocs.post.response, type: doctor_entity_1.Doctor }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_doctor_dto_1.CreateDoctorDto]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        required: false,
        name: 'search',
        description: 'the doctors name',
    }),
    (0, swagger_1.ApiQuery)({
        required: false,
        name: 'page',
        description: 'The pages',
    }),
    (0, swagger_1.ApiCreatedResponse)({ description: controller_docs_1.doctorDocs.get.response, type: [doctor_entity_1.Doctor] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        description: controller_docs_1.doctorDocs.get.params.id,
    }),
    (0, swagger_1.ApiCreatedResponse)({ description: controller_docs_1.doctorDocs.get.response, type: doctor_entity_1.Doctor }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        required: true,
        description: controller_docs_1.doctorDocs.delete.id,
        name: 'id',
    }),
    (0, swagger_1.ApiBody)({ description: controller_docs_1.doctorDocs.update.apiBody, type: update_doctor_dto_1.UpdateDoctorDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_doctor_dto_1.UpdateDoctorDto]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        required: true,
        description: controller_docs_1.doctorDocs.delete.id,
        name: 'id',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: controller_docs_1.doctorDocs.delete.response,
        type: controller_docs_1.UpdateNDeleteResponse,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "remove", null);
DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map