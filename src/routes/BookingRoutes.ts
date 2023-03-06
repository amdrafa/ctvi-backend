import { Router } from 'express';
import { UpdateResult } from 'typeorm';
import { BookingService } from '../services/booking/BookingService';

export const bookingRoutes = Router();

const bookingService = new BookingService();

bookingRoutes.get("/list", async (request, response) => {
    const allBooking = await bookingService.list();

    if(!allBooking){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allBooking)
})

bookingRoutes.get("/list/:id", async (request, response) => {
    
    const allBooking = await bookingService.listByIdDetail(Number(request.params.id));

    if(!allBooking){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allBooking)
})

bookingRoutes.get("/:id/schedule", async (request, response) => {
    
    const allSchedules = await bookingService.listSchedulesByBookingID(Number(request.params.id))

    if(!allSchedules){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allSchedules)
})

bookingRoutes.post("/create", async (req, resp) => {

    const createBooking = await bookingService.create(req);

    if(!createBooking){
        return resp.status(200).json({message: "No data found"});
    }
    return resp.status(201).json(createBooking);
})

bookingRoutes.post("/create/schedules", async (req, resp) => {

    const createBooking = await bookingService.createWithSchedules(req);

    if(!createBooking){
        return resp.status(200).json({message: "No data found"});
    }
    return resp.status(201).json(createBooking);
})

bookingRoutes.put("/update",async (req, res) => {
    return res.status(200).json(bookingService.updateBooking(req))
})

bookingRoutes.put("/update/:id/terms", async (req, res) => {
    return res.status(200).json(bookingService.updateTermsByBookingId(req))
})

bookingRoutes.delete("/delete/:id", async (req, resp) =>{
    const id = req.params.id

    const wasUserDeleted:UpdateResult = await bookingService.deleteById(Number(id))

    return resp.json({message: wasUserDeleted.affected > 0 ? "User deleted." : "Error when deleting user."})
})

bookingRoutes.delete("/delete/bookingId/:id", async (req, resp) =>{
    const bookingId = req.params.id
    const wasUserDeleted:UpdateResult = await bookingService.deleteByBookingId(bookingId)

    return resp.json({message: wasUserDeleted.affected > 0 ? "User deleted." : "Error when deleting user."})
})

bookingRoutes.post("/aprove/:id",async (req, res) => {
    return res.status(200).json(bookingService.approveBooking(req))
})

bookingRoutes.get("/user/:id",async (req, res) =>{
    const booking = await bookingService.listByUserId(req)

    if(booking){
        return res.status(200).json(booking)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

