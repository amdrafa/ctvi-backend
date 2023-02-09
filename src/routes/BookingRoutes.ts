import { Router } from 'express';
import { BookingService } from '../services/BookingService';

export const bookingRoutes = Router();

bookingRoutes.get("/list", (request, response) => {
    
    const bookingService = new BookingService();

    const allBooking = bookingService.list();

    if(!allBooking){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allBooking)
})