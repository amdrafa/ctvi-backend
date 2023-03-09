import { TypeORMDataSource } from '../config/DataSourceConnection';
import { VehicleTypeModel } from './../model/VehicleTypeModel';

export class VehicleTypeRepository{
    repository = TypeORMDataSource.getRepository(VehicleTypeModel)
    async create(vehicle: VehicleTypeModel){
        return await this.repository.save(vehicle)
    }
}