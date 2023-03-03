import { Request } from "express";
import { UpdateResult } from "typeorm";
import { ResourceModel } from "../../model/ResourceModel";
import { ResourceRepository } from "../../repositories/ResourceRepository";
import { IResourceService } from "./IResourceService";

export class ResourceService implements IResourceService {

    private resourceRepository = new ResourceRepository();

    async list(): Promise<ResourceModel[]> {    
        return await this.resourceRepository.getAllResources();
    }

    async listDetail(id:number): Promise<ResourceModel> {
        return await this.resourceRepository.getResourceById(id);
    }

    async create(request: Request): Promise<ResourceModel> {
        return this.resourceRepository.createResource(request.body);
    }

    async update(request: Request): Promise<UpdateResult> {
        return await this.resourceRepository.updateResource(request.body)
    }

    async delete(id: number): Promise<UpdateResult>{
        return await this.resourceRepository.deleteResource(id)
    }

}