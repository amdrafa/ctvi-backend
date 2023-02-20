import { ResourceModel } from "../model/ResourceModel";

export class ResourceRepository{

    public getAllResources(): ResourceModel[] {
        return require("../test/mockup/resource.json")
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