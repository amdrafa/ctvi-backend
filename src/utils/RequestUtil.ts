import { Request } from "express";

export class RequestUtil {
    GetUrlId(request: Request): string{

        const id = request.params.id;

        return id;
    }
}