import { Router } from 'express';
import { InviteService } from '../services/invite/InviteService';

export const inviteRoutes = Router();

const inviteService = new InviteService();

inviteRoutes.get("/list", async (request, response) => {
    const allCompanies = await inviteService.list();

    if(!allCompanies){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allCompanies)
})

inviteRoutes.get("/list/:id", async (request, response) =>{
    const inviteObj = await inviteService.listDetail(Number(request.params.id))
    if (!inviteObj){
        return response.status(200).json({message: "No data found"}); 
    }
    return response.status(200).json(inviteObj)
    
})

inviteRoutes.post("/create", async (request, response)=>{
    const inviteObj = await inviteService.create(request)
    if(!inviteObj){
        return response.status(200).json({message: "It was not able to create your invite"}); 
    }
    return response.status(201).json(inviteObj)
})

inviteRoutes.put("/update", async (request, response) =>{
    const inviteObj = await inviteService.update(request)
    if(!inviteObj){
        return response.status(200).json({message: "It was not able to update your invite"}); 
    }
    return response.status(200).json(inviteObj)
})

inviteRoutes.delete("/delete/:id", async (request, response) =>{
    console.log(request.params.id)
    const result = await inviteService.delete(Number(request.params.id))

    if(!result){
        return response.status(200).json({message: "It was not able to delete your invite"})
    }
    return response.status(202).json(result)
})