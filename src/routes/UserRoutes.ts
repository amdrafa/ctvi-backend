import { Router } from 'express';
import { BookingService } from '../services/BookingService';
import { UserService } from '../services/UserService';

export const userRoutes = Router();

const userService = new UserService();

userRoutes.get("/list", (request, response) => {
    const allUsers = userService.list();

    if(!allUsers){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allUsers)
})


