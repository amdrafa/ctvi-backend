import { CertificateService } from './../services/certificate/CertificateService';
import { Router } from "express"

export const certificateRoutes = Router()

const service = new CertificateService()

certificateRoutes.get('/list', async (req, res)=>{
    const certificates = await service.list()

    if(certificates){
        return res.status(200).json(certificates)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

certificateRoutes.get('/list/:id', async (req, res)=>{
    const certificate = await service.listByID(req)

    if(certificate){
        return res.status(200).json(certificate)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

certificateRoutes.post('/create', async (req, res)=>{
    const certificate = await service.create(req)

    if(certificate){
        return res.status(200).json(certificate)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

certificateRoutes.put('/update/:id', async (req, res)=>{
    const certificate = await service.update(req)

    if(certificate){
        return res.status(200).json(certificate)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

certificateRoutes.delete('/delete/:id', async (req, res)=>{
    const certificate = await service.delete(req)

    if(certificate){
        return res.status(200).json(certificate)
    }
    return res.status(200).json({message: 'Something went wrong'})
})
