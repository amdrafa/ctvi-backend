<<<<<<< HEAD
import { UpdateResult } from "typeorm";
=======
>>>>>>> 58101e44f1de5f502a78682b4176d976e0b5dc51
import { TypeORMDataSource } from "../config/DataSourceConnection";
import { ResourceModel } from "../model/ResourceModel";

export class ResourceRepository{

    repository = TypeORMDataSource.getRepository(ResourceModel)

    public async getAllResources(): Promise<ResourceModel[]> {
        return await this.repository.find()
    }

    public async getResourceById(id:number): Promise<ResourceModel> {
        return await this.repository.findOneBy({id: id})
    }

    public async createResource(resource: ResourceModel): Promise<ResourceModel> {
        return  await this.repository.save(resource)
    }

    public async updateResource(resource: ResourceModel): Promise<UpdateResult> {
        return await this.repository.update({id: resource.id}, {...resource})
    }

    public async deleteResource(id: number): Promise<UpdateResult> {
        return await this.repository.softDelete({id: id})
    }
}