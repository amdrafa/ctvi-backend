import { MonitoringModel } from './../model/MonitoringModel';
import { MonitoringService } from './../services/monitoring/MonitoringService';
import { Router } from 'express';
export const monitoringRoute = Router()
const service = new MonitoringService()

monitoringRoute.get('/list', async (req, res) => {
    const monitoring = await service.list()

    if(monitoring){
        return res.status(200).json(monitoring)
    }
    return res.status(200).json({message: 'Something went wrong'}) 
})

monitoringRoute.get('/list/:id',async (req, res) => {
    const monitoring = await service.listById(req)

    if(monitoring){
        return res.status(200).json(monitoring)
    }
    return res.status(200).json({message: 'Something went wrong'}) 
})

monitoringRoute.post('/create', async (req, res) => {
    const monitoring = await service.create(req)

    if(monitoring){
        return res.status(200).json(monitoring)
    }
    return res.status(200).json({message: 'Something went wrong'}) 
})

monitoringRoute.put('/update/:id',async (req, res)=>{
    const monitoring = await service.update(req)

    if(monitoring){
        return res.status(200).json(monitoring)
    }
    return res.status(200).json({message: 'Something went wrong'}) 
})

monitoringRoute.delete('/delete/:id',async (req, res)=>{
    const monitoring = await service.delete(req)

    if(monitoring){
        return res.status(200).json(monitoring)
    }
    return res.status(200).json({message: 'Something went wrong'}) 
})