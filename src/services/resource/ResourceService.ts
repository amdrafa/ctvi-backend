import { Request } from "express";
import { ResourceModel } from "../../model/ResourceModel";
import { ResourceRepository } from "../../repositories/ResourceRepository";
import { IResourceService } from "./IResourceService";

export class ResourceService implements IResourceService {

    private resourceRepository = new ResourceRepository();

    async list(): Promise<ResourceModel[]> {

        const allResources = await this.resourceRepository.getAllResources();
        
        return allResources;
    }

    listDetail(id:number): ResourceModel {

        const resource = this.resourceRepository.getResourceById(id)
        
        return resource;
    }

    create(request: Request): ResourceModel {

        const resource: ResourceModel = new ResourceModel();

        resource.name = request.body.name,
        resource.capacity = request.body.capacity,
        resource.isActive = request.body.isActive
        
        return this.resourceRepository.createResource(resource);
    }

    update(request: Request): ResourceModel {

        const resource = new ResourceModel();

        resource.name = request.body.name,
        resource.capacity = request.body.capacity,
        resource.isActive = request.body.isActive
        
        return this.resourceRepository.updateResource(resource);
    }

    delete(id: number): boolean{
        return this.resourceRepository.deleteResource(id)
    }

}