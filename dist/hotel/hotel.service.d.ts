import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelService {
    create(createHotelDto: CreateHotelDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHotelDto: UpdateHotelDto): string;
    remove(id: number): string;
}
