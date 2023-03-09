import { VehicleTypeModel } from './../../model/VehicleTypeModel';
import { Request } from "express";

export interface IVehicleTypeService{
    create(vehicle: VehicleTypeModel): Promise<VehicleTypeModel>
}