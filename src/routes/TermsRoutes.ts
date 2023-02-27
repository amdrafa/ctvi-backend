import { Router } from 'express';
import { TermsService } from '../services/terms/TermsService';

export const termsRoutes = Router()

const termsService = new TermsService();

termsRoutes.post('/create', async (request, response) => {
    const term = await termsService.create(request.body)

    if(!term){
        throw new Error("Error when creating term")
    }

    return response.status(201).json(term);
})

termsRoutes.post('/update', async (request, response) => {
    const term = await termsService.update(Number(request.body.id), request.body)

    if(!term){
        throw new Error("Error when updating term")
    }

    return response.status(200).json(term);
})

termsRoutes.get('/list', async (request, response) => {
    const terms = await termsService.list()

    if(!terms){
        throw new Error("Error when listing terms")
    }

    return response.status(200).json(terms);
})

termsRoutes.get('/list/:id', async (request, response) => {
    const term = await termsService.listById(Number(request.params.id))

    if(!term){
        throw new Error("Error when listing term")
    }

    return response.status(200).json(term);
})

termsRoutes.delete('/delete/:id', async (request, response) => {
    const term = await termsService.delete(Number(request.params.id))

    if(!term){
        throw new Error("Error when deleting term")
    }

    return response.status(200).json(term);
})