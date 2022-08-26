import { Request, Response } from "express";
import { GetHotelService } from "../services/GetHotelService";
import { GetHotelByIdService } from "../services/GetHotelByIdService";
import { CreateHotelService } from "../services/CreateHotelService";
import { UpdateHotelService } from "../services/UpdateHotelService";

export class HotelController {
    async getHotel(req: Request, res: Response) {
        try {
            const min = Number(req.query.min) || 0
            const max = Number(req.query.max) || 9999999999
            const getHotelService = new GetHotelService()
            const getHotel = await getHotelService.execute(min, max);
            return res.status(200).json(getHotel)
        } catch(err) {
            return res.status(400).json({msg: "Something went wrong", error: err});
        }
    }

    async getHotelById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const getHotelByIdService = new GetHotelByIdService()
            const getHotelById = await getHotelByIdService.execute(id)
            return res.status(200).json(getHotelById[0]);
        } catch(err) {
            return res.status(400).json({msg: "Something went wrong", error: err})
        }
    }

    async createHotel(req: Request, res: Response) {
        try {
            const hotel = req.body
            const createHotelService = new CreateHotelService()
            const createHotel = await createHotelService.execute(hotel);
            return res.status(201).json({msg: "Hotel successfully added to the database!", data: createHotel})
        } catch(err) {
            return res.status(400).json({msg: "Something went wrong", error: err})
        }
    }

    async updateHotel(req: Request, res: Response) {
        try {
            const hotel = req.body;
            const updateHotelService = new UpdateHotelService()
            const updateHotel = updateHotelService.execute(hotel);
            return res.status(200).json({msg: "Hotel successfully updated!", data: hotel})
        } catch(err) {
            return res.status(400).json({msg: "Something went wrong", error: err})
        }
    }

}