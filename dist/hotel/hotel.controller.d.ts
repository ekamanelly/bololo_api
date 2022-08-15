/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    create(createHotelDto: CreateHotelDto): Promise<import("./entities/hotel.entity").Hotel & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): import("mongoose").Query<(import("./entities/hotel.entity").Hotel & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], import("./entities/hotel.entity").Hotel & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/hotel.entity").HotelDocument>;
    findOne(id: string): Promise<(import("./entities/hotel.entity").Hotel & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(id: string, updateHotelDto: UpdateHotelDto): Promise<{
        acknowledged: boolean;
    }>;
    remove(id: string): Promise<{
        acknowledged: boolean;
    }>;
}
