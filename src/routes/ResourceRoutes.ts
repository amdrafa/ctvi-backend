import { Router } from 'express';
import { ResourceService } from '../services/resource/ResourceService';


export const resourceRoutes = Router();

const resourceService = new ResourceService();

resourceRoutes.get("/list", async (request, response) => {
    const allResources = await resourceService.list();
    
    if(!allResources){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allResources)
})

resourceRoutes.get("/list/:id", async (request, response) => {
    const resource = await resourceService.listDetail(Number(request.params.id))
    
    if(!resource){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(resource)
})

resourceRoutes.post("/create", async (request, response) => {
   
    const resource = await resourceService.create(request);

    if(!resource){
        return response.status(200).json({message: "Resource couldn't be created"});
    }

    return response.status(201).json(resource);
})

resourceRoutes.put("/update", async (request, response) => {
   
    const resource = await resourceService.update(request);

    if(!resource){
        return response.status(200).json({message: "Resource couldn't be updated"});
    }

    return response.status(201).json(resource);
})

resourceRoutes.delete("/delete/:id", async (request, response) => {
   
    const result = await resourceService.delete(Number(request.params.id))

    if(!result){
        return response.status(200).json({message: "It was not able to delete this resource"})
    }
    return response.status(202).json(result)
})




