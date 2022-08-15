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
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hotel_entity_1 = require("./entities/hotel.entity");
let HotelService = class HotelService {
    constructor(hotel) {
        this.hotel = hotel;
    }
    create(createHotelDto) {
        const hotelObj = Object.assign(Object.assign({}, createHotelDto), { rating: 3 });
        return this.hotel.create(hotelObj);
    }
    findAll() {
        return this.hotel.find({ isDeleted: false });
    }
    async findOne(_id) {
        try {
            const result = await this.hotel.find({ _id, isDeleted: false });
            return result;
        }
        catch (error) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(_id, updateHotelDto) {
        try {
            const result = await this.hotel.updateOne({ _id }, updateHotelDto);
            return { acknowledged: result.acknowledged };
        }
        catch (error) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async remove(_id) {
        try {
            const result = await this.hotel.updateOne({ _id }, { isDeleted: true });
            return { acknowledged: result.acknowledged };
        }
        catch (error) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hotel_entity_1.Hotel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map