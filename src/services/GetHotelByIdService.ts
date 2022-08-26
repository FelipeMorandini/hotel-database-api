import { HotelModel } from "../database/models/Hotel";

export class GetHotelByIdService {
    async execute(id: number) {
        return await HotelModel.findAll({
            where: {
                id: id
            }
        })
    }
}