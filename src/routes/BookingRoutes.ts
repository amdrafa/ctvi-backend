import { Router } from 'express';
import { ScheduleRepository } from '../repositories/ScheduleRepository';
import { BookingService } from '../services/BookingService';
import { ScheduleService } from '../services/ScheduleService';

export const bookingRoutes = Router();

const bookingService = new BookingService();

bookingRoutes.get("/list", (request, response) => {
    const allBooking = bookingService.list();

    if(!allBooking){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allBooking)
})

bookingRoutes.get("/:id", (request, response) => {
    
    const allBooking = bookingService.listByIdDetail(Number(request.params.id));

    if(!allBooking){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allBooking)
})

bookingRoutes.get("/:id/bookingId", (request, response) => {
    
    const allBooking = bookingService.listByBookingIdDetail(request.params.id);

    if(!allBooking){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allBooking)
})

bookingRoutes.get("/:id/schedule", (request, response) => {
    
    const allSchedules = new ScheduleService()

    if(!allSchedules){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allSchedules)
})

bookingRoutes.post("/create", (req, resp) => {

    const createBooking = bookingService.create(req);

    if(!createBooking){
        return resp.status(200).json({message: "No data found"});
    }
    return resp.status(201).json(createBooking);
})

bookingRoutes.delete("/delete/:id", (req, resp) =>{
    const id = req.params.id
    return bookingService.deleteById(Number(id))
})

bookingRoutes.delete("/delete/bookingId/:id", (req, resp) =>{
    const bookingId = req.params.id
    return bookingService.deleteByBookingId(bookingId)
})

