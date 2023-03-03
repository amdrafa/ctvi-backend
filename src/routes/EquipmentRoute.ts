import { EquipmentService } from './../services/equipment/EquipmentService';
import { Router } from "express"

export const equipementRoutes = Router()

const service = new EquipmentService()

equipementRoutes.get('/list', async (req, res)=>{
    const equipments = await service.list()

    if(equipments){
        return res.status(200).json(equipments)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

equipementRoutes.get('/list/:id', async (req, res)=>{
    const equipment = await service.listByID(req)

    if(equipment){
        return res.status(200).json(equipment)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

equipementRoutes.post('/create', async (req, res)=>{
    const equipment = await service.create(req)

    if(equipment){
        return res.status(200).json(equipment)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

equipementRoutes.put('/update/:id', async (req, res)=>{
    const equipment = await service.update(req)

    if(equipment){
        return res.status(200).json(equipment)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

equipementRoutes.delete('/delete/:id', async (req, res)=>{
    const equipment = await service.delete(req)

    if(equipment){
        return res.status(200).json(equipment)
    }
    return res.status(200).json({message: 'Something went wrong'})
})
