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

userRoutes.get("/login", (request, response) => {
    const {email, password} = request.body;

    const statusResponse = userService.login(email, password);

    return response.status(statusResponse).send();
})


