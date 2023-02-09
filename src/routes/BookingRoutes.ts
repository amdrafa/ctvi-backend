import { Router } from 'express';
import { BookingService } from '../services/BookingService';

export const bookingRoutes = Router();

bookingRoutes.get("/list", (request, response) => {
    
    const allBooking = new BookingService();

    allBooking.list();

    if(!allBooking){
        return response.status(200).json({message: "No data found"});
    }
    return response.status(200).json({allBooking})
})