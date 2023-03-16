import { Router } from "express";
import { UserCertificatesService } from "../services/userCertificates/UserCertificateService";

export const userCertificates = Router()

const userCertificatesService = new UserCertificatesService()

userCertificates.get('/list', async (req, res)=>{
    return await userCertificatesService.list()
})