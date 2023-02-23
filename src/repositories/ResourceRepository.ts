import { TypeORMDataSource } from "../config/DataSourceConnection";
import { ResourceModel } from "../model/ResourceModel";

export class ResourceRepository{

    repository = TypeORMDataSource.getRepository(ResourceModel)

    public async getAllResources(): Promise<ResourceModel[]> {
        return await this.repository.find()
    }

    public getResourceById(id:number): ResourceModel {
        return require("../test/mockup/resource.json")
    }

    public createResource(resource: ResourceModel): ResourceModel {
        return require("../test/mockup/resource.json")
    }

    public updateResource(resource: ResourceModel): ResourceModel {
        return require("../test/mockup/resource.json")
    }

    public deleteResource(id: number): boolean {
        return require("../test/mockup/resource.json")
    }
}