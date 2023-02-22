import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserService } from "../services/user/UserService";

interface JwtPayload {
    id: number;
}

export const ValidateToken = (req:Request, res: Response, next: NextFunction) => {

    const userService = new UserService();

    const { authorization } = req.headers;

    if(!authorization){
        throw new Error("Auth token not found")
    }

    const token = authorization.split(" ")[1];

    const { id } = jwt.verify(token, "ctvi-secret") as JwtPayload;

    const user = userService.listById(id);

    if(!user){
        throw new Error("User not found. Id passed by token.")
    }

    next();
}