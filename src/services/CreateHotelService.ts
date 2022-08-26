import { HotelModel } from "../database/models/Hotel";

type Hotel = {
    name: string;
    description: string;
    lat: string;
    lng: string;
    price: number;
    status: string;
}

export class CreateHotelService {
    async execute(hotel: Hotel) {

        return await HotelModel.create(hotel);
    
    }
}