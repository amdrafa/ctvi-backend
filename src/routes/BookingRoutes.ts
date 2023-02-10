import { Router } from 'express';
import { BookingService } from '../services/BookingService';

export const bookingRoutes = Router();

const bookingService = new BookingService();

bookingRoutes.get("/list", (request, response) => {
    const allBooking = bookingService.list();

    if(!allBooking){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allBooking)
})

bookingRoutes.post("/create", (req, resp) => {
    const createBooking = bookingService.create(req.body);
    if(!createBooking){
        return resp.status(200).json({message: "No data found"});
    }
    return resp.status(201).json(createBooking)
})

