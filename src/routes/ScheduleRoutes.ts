import { Router } from 'express';
import { BookingService } from '../services/booking/BookingService';
import { ScheduleService } from '../services/schedule/ScheduleService';


export const scheduleRoutes = Router();

const scheduleService = new ScheduleService();

scheduleRoutes.post("/create", (request, response) => {
    const schedules = scheduleService.create(request)
    
    if(!schedules){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(schedules)
})

scheduleRoutes.get("/list/:id", (request, response) => {
    const schedule = scheduleService.listDetail(Number(request.params.id))
    
    if(!schedule){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(schedule)
})

scheduleRoutes.post("/approve/:id", async (req, res)=>{
    return res.status(200).json(await scheduleService.approveSchedule(req))
})



