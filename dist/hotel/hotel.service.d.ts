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
import { Model } from 'mongoose';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel, HotelDocument } from './entities/hotel.entity';
export declare class HotelService {
    private hotel;
    constructor(hotel: Model<HotelDocument>);
    create(createHotelDto: CreateHotelDto): Promise<Hotel & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): import("mongoose").Query<(Hotel & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Hotel & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, HotelDocument>;
    findOne(_id: string): Promise<(Hotel & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(_id: string, updateHotelDto: UpdateHotelDto): Promise<{
        acknowledged: boolean;
    }>;
    remove(_id: string): Promise<{
        acknowledged: boolean;
    }>;
}
