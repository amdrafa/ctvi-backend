import { Router } from 'express';
import { CompanyService } from '../services/company/CompanyService';

export const companyRoutes = Router();

const companyService = new CompanyService();

companyRoutes.get("/list", async (request, response) => {
    const allCompanies = await companyService.list();

    if(!allCompanies){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allCompanies)
})

companyRoutes.get("/list/:id", async (request, response) =>{
    const companyObj = await companyService.listDetail(Number(request.params.id))
    if (!companyObj){
        return response.status(200).json({message: "No data found"}); 
    }
    return response.status(200).json(companyObj)
    
})

companyRoutes.post("/create", async (request, response)=>{
    const companyObj = await companyService.create(request)
    if(!companyObj){
        return response.status(200).json({message: "It was not able to create your company"}); 
    }
    return response.status(201).json(companyObj)
})

companyRoutes.put("/update", async (request, response) =>{
    const companyObj = await companyService.update(request)
    if(!companyObj){
        return response.status(200).json({message: "It was not able to update your company"}); 
    }
    return response.status(200).json(companyObj)
})

companyRoutes.delete("/delete/:id", async (request, response) =>{
    console.log(request.params.id)
    const result = await companyService.delete(Number(request.params.id))

    if(!result){
        return response.status(200).json({message: "It was not able to delete your company"})
    }
    return response.status(202).json(result)
})