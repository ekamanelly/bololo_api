"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyModule = void 0;
const common_1 = require("@nestjs/common");
const study_service_1 = require("./study.service");
const study_controller_1 = require("./study.controller");
const mongoose_1 = require("@nestjs/mongoose");
const study_entity_1 = require("./entities/study.entity");
const studiy_property_entity_1 = require("./entities/studiy-property.entity");
const study_property_controller_1 = require("./study-property.controller");
const study_image_controller_1 = require("./study-image-controller");
const study_image_service_1 = require("./study-image.service");
const doctor_module_1 = require("../doctor/doctor.module");
let StudyModule = class StudyModule {
};
StudyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            doctor_module_1.DoctorModule,
            mongoose_1.MongooseModule.forFeature([
                { name: study_entity_1.Study.name, schema: study_entity_1.StudySchema },
                { name: studiy_property_entity_1.StudyProperty.name, schema: studiy_property_entity_1.studyPropertySchema },
            ]),
        ],
        controllers: [study_controller_1.StudyController, study_property_controller_1.StudyPropertyController, study_image_controller_1.StudyImageController],
        providers: [study_service_1.StudyService, study_image_service_1.ImageService,],
    })
], StudyModule);
exports.StudyModule = StudyModule;
//# sourceMappingURL=study.module.js.map