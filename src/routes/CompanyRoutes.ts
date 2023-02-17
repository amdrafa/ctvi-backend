import { Router } from 'express';
import { CompanyService } from '../services/CompanyService';

export const companyRoutes = Router();

const companyService = new CompanyService();

companyRoutes.get("/list", (request, response) => {
    const allCompanies = companyService.list();

    if(!allCompanies){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allCompanies)
})

companyRoutes.get("/list/:id", (request, response) =>{
    const companyObj = companyService.listDetail(Number(request.params.id))
    if (!companyObj){
        return response.status(200).json({message: "No data found"}); 
    }
    return response.status(200).json(companyObj)
    
})

companyRoutes.post("/create", (request, response)=>{
    const companyObj = companyService.create(request)
    if(!companyObj){
        return response.status(200).json({message: "It was not able to create your company"}); 
    }
    return response.status(201).json(companyObj)
})

companyRoutes.put("/update", (request, response) =>{
    const companyObj = companyService.update(request)
    if(!companyObj){
        return response.status(200).json({message: "It was not able to update your company"}); 
    }
    return response.status(200).json(companyObj)
})

companyRoutes.delete("/delete/:id", (request, response) =>{
    const result = companyService.delete(Number(request.params.id))

    if(!result){
        return response.status(200).json({message: "It was not able to delete your company"})
    }
    return response.status(204)
})