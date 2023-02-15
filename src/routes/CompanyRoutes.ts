import { Router } from 'express';
import { BookingService } from '../services/BookingService';
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
