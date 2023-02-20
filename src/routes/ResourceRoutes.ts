import { Router } from 'express';
import { ResourceService } from '../services/resource/ResourceService';


export const resourceRoutes = Router();

const resourceService = new ResourceService();

resourceRoutes.get("/list", (request, response) => {
    const allResources = resourceService.list();
    
    if(!allResources){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allResources)
})

resourceRoutes.get("/list/:id", (request, response) => {
    const resource = resourceService.listDetail(Number(request.params.id))
    
    if(!resource){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(resource)
})

resourceRoutes.post("/create", (request, response) => {
   
    const resource = resourceService.create(request);

    if(!resource){
        return response.status(200).json({message: "Resource couldn't be created"});
    }

    return response.status(201).json(resource);
})

resourceRoutes.put("/update", (request, response) => {
   
    const resource = resourceService.update(request);

    if(!resource){
        return response.status(200).json({message: "Resource couldn't be updated"});
    }

    return response.status(201).json(resource);
})

resourceRoutes.delete("/delete/:id", (request, response) => {
   
    const result = resourceService.delete(Number(request.params.id))

    if(!result){
        return response.status(200).json({message: "It was not able to delete this resource"})
    }
    return response.status(204).json({message: "Resource deleted"})
})




