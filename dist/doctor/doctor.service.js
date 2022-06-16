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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const doctor_entity_1 = require("./entities/doctor.entity");
let DoctorService = class DoctorService {
    constructor(doctor) {
        this.doctor = doctor;
    }
    async create(createDoctorDto) {
        try {
            const result = await this.doctor.create(createDoctorDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException('name already exist', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
    }
    async findAll(name = {}, page = 1) {
        var perPage = 8;
        const totalDocs = await this.doctor.find(Object.assign({ isDeleted: false }, name)).count();
        const totalPage = Math.ceil(totalDocs / perPage);
        return this.doctor
            .find(Object.assign({ isDeleted: false }, name))
            .sort({ date: 'asc' })
            .limit(perPage)
            .skip(perPage * (page - 1))
            .then((docs) => {
            return {
                docs,
                totalDocs,
                page,
                totalPage,
                hasNextPage: page < totalPage,
                hasPrevPage: page > 1,
            };
        })
            .catch((err) => {
            throw new common_1.HttpException('Server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
    async findOne(_id) {
        try {
            const result = await this.doctor.find({ _id, isDeleted: false });
            return result;
        }
        catch (error) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(_id, updateDoctorDto) {
        try {
            const result = await this.doctor.updateOne({ _id }, updateDoctorDto);
            return { acknowledged: result.acknowledged };
        }
        catch (error) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async remove(_id) {
        try {
            const result = await this.doctor.updateOne({ _id }, { isDeleted: true });
            return { acknowledged: result.acknowledged };
        }
        catch (error) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(doctor_entity_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map