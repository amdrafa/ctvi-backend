import { UserService } from './../services/user/UserService';
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


interface JwtPayload {
    id: number;
}

export const ValidateToken = async (req:Request, res: Response, next: NextFunction) => {

    const userService = new UserService()

    const { authorization } = req.headers;

    if(!authorization){
        throw new Error("Auth token not found")
    }

    const token = authorization.split(" ")[1];

    const { id } = jwt.verify(token, "ctvi-secret") as JwtPayload;

    const user = await userService.listById(id);
    
    user.password=''
    req.body.user = user

    next();
}