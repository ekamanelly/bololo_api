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
exports.UpdateNDeleteResponse = exports.doctorDocs = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.doctorDocs = {
    post: {
        apiBody: 'Please provide the required params',
        response: 'you should status 200 with doctor object',
    },
    get: {
        query: {
            page: 'Please provide this value or 1 as it default',
            search: 'this would be the exact match to the doctor name, not fuzzy searches',
        },
        params: {
            id: 'please provide this value to zero down on a study',
        },
        response: 'you should status 200 with an array of doctor',
    },
    update: {
        apiBody: 'Please provide the required params',
        id: 'please provide the doctor\'s _id',
        response: 'you should status 200 with a  modified object',
    },
    delete: {
        id: 'please provide the doctor\'s _id',
        response: 'you should status 200 with a  modified object',
    },
};
class UpdateNDeleteResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the value will be true if the action was successful',
    }),
    __metadata("design:type", Boolean)
], UpdateNDeleteResponse.prototype, "modified", void 0);
exports.UpdateNDeleteResponse = UpdateNDeleteResponse;
//# sourceMappingURL=controller.docs.js.map