import express from 'express';
import mwBasicAuth from '../middlewares/basicAuth';
import { HotelController } from '../controllers/HotelController';

const router = express.Router();
const hotelController = new HotelController()

router.get('/hotels', mwBasicAuth, hotelController.getHotel)
router.get('/hotels/:id', mwBasicAuth, hotelController.getHotelById)
router.post('/hotels', mwBasicAuth, hotelController.createHotel)
router.put('/hotels', mwBasicAuth, hotelController.updateHotel)

export { router };