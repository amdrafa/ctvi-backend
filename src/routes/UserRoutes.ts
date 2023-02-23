import { ValidateToken } from './../middlewares/ValidateToken';
import { Router } from 'express';
import { UserService } from '../services/user/UserService';
import jwt from 'jsonwebtoken';

export const userRoutes = Router();

const userService = new UserService();

userRoutes.post("/create", (request, response) => {
    const user = userService.create(request);

    if(!user){
        return response.status(200).json({message: "It was not possible to create this user."})
    }
    
    return response.status(200).json(user);
})

userRoutes.post("/login", async (request, response) => {
    const {email, password} = request.body;

    const user = await userService.login(email, password);

    if(!user){
        return response.status(401).json({message: "Invalid email or password"})
    }

    const token = jwt.sign({ id: user?.id }, "ctvi-secret", { expiresIn: "8h" })

    return response.status(200).json({user, token});
})


userRoutes.use(ValidateToken)

userRoutes.get("/list", (request, response) => {
    const allUsers = userService.list();

    if(!allUsers){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allUsers)
})

userRoutes.get("/list/:id", (request, response) => {
    const user = userService.listById(Number(request.params.id))

    if(!user){
        return response.status(200).json({message: "User not found"})
    }

    return response.status(200).json(user);
})


// RETORNAR UM NOVO TOKEN COM USER ATUALIZADO
userRoutes.post("/update", (request, response) => {
    const user = userService.update(request);

    if(!user){
        return response.status(200).json({message: "It was not possible to edit this user."});
    }
    
    return response.status(200).json(user);
})

userRoutes.delete("/delete/:id", (request, response) => {

    const userId = Number(request.params.id);
    const isUserDeleted = userService.delete(userId);

    if(!isUserDeleted){
        return response.status(200).json({message: "It was not possible to delete this user."});
    }
    
    return response.status(200).send();
})





