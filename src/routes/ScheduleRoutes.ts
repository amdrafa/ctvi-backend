import { Router } from 'express';
import { BookingService } from '../services/booking/BookingService';
import { ScheduleService } from '../services/schedule/ScheduleService';


export const scheduleRoutes = Router();

const scheduleService = new ScheduleService();

scheduleRoutes.get("/list", (request, response) => {
    const allSchedules = scheduleService.list('123')
    
    if(!allSchedules){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allSchedules)
})

scheduleRoutes.get("/list/", (request, response) => {
    const allSchedules = scheduleService.list('123')
    
    if(!allSchedules){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allSchedules)
})


