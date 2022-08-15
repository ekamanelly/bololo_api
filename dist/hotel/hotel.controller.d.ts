import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    create(createHotelDto: CreateHotelDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHotelDto: UpdateHotelDto): string;
    remove(id: string): string;
}
