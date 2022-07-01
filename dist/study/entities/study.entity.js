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
exports.StudySchema = exports.Study = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const doctor_entity_1 = require("../../doctor/entities/doctor.entity");
let Study = class Study {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Please capitalized first letter',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Study.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)({
        description: 'url to cloud storage',
    }),
    __metadata("design:type", String)
], Study.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This might be an array of staring, one to represent a paragraph. but for now it just string',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Study.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value decide if the study is publicly displayed, false by default ',
    }),
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Study.prototype, "isDrafted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' ? ',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Study.prototype, "statusProperty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' ? ',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Study.prototype, "typeProperty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' date from the server side, and number you can convert to  js data ',
    }),
    (0, mongoose_1.Prop)({ unique: true, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: doctor_entity_1.Doctor.name, }] }),
    __metadata("design:type", Array)
], Study.prototype, "doctors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' date from the server side, and number you can convert to  js data ',
    }),
    (0, mongoose_1.Prop)({ default: new Date().getTime() }),
    __metadata("design:type", Number)
], Study.prototype, "datePosted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '',
    }),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Study.prototype, "isDeleted", void 0);
Study = __decorate([
    (0, mongoose_1.Schema)()
], Study);
exports.Study = Study;
exports.StudySchema = mongoose_1.SchemaFactory.createForClass(Study);
//# sourceMappingURL=study.entity.js.map