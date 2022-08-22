import { HotelModel } from "database/models/Hotel";

type Hotel = {
    id: number;
    name: string;
    description: string;
    lat: string;
    lng: string;
    price: number;
    status: string;
}

export class GetHotelService {
    async execute() {
        
    }
}