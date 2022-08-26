import { HotelModel } from "../database/models/Hotel";
import { Op } from 'sequelize'

export class GetHotelService {
    async execute(min: number, max: number) {
        return await HotelModel.findAll({
            where: {
                price: {
                    [Op.between]: [min, max]
                }
            }
        })
    }
}