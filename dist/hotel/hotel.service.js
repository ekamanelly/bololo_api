"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
let HotelService = class HotelService {
    create(createHotelDto) {
        return 'This action adds a new hotel';
    }
    findAll() {
        return `This action returns all hotel`;
    }
    findOne(id) {
        return `This action returns a #${id} hotel`;
    }
    update(id, updateHotelDto) {
        return `This action updates a #${id} hotel`;
    }
    remove(id) {
        return `This action removes a #${id} hotel`;
    }
};
HotelService = __decorate([
    (0, common_1.Injectable)()
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map