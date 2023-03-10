import { VehicleTypeRepository } from './../../repositories/VehicleTypeRepositoy';
import { VehicleTypeModel } from '../../model/VehicleTypeModel';
import { IVehicleTypeService } from './IVehicleTypeService';
export class VehicleTypeService implements IVehicleTypeService{
    private repository = new VehicleTypeRepository()
    
    async create(vehicle: VehicleTypeModel): Promise<VehicleTypeModel> {
        return await this.repository.create(vehicle)
    }

}