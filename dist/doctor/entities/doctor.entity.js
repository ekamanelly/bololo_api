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
exports.DoctorSchema = exports.Doctor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Doctor = class Doctor {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Please capitalized first letters',
    }),
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Doctor.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'time in javascript numbers',
    }),
    (0, mongoose_1.Prop)({ default: new Date().getTime() }),
    __metadata("design:type", Number)
], Doctor.prototype, "dateCreate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'time in javascript numbers',
    }),
    (0, mongoose_1.Prop)({ default: new Date().getTime() }),
    __metadata("design:type", Number)
], Doctor.prototype, "dateUpdated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '',
    }),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "isDeleted", void 0);
Doctor = __decorate([
    (0, mongoose_1.Schema)()
], Doctor);
exports.Doctor = Doctor;
exports.DoctorSchema = mongoose_1.SchemaFactory.createForClass(Doctor);
//# sourceMappingURL=doctor.entity.js.map