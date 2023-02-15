import { ScheduleModel } from "../model/ScheduleModel";
import { ScheduleRepository } from "../repositories/ScheduleRepository";
import { IScheduleService } from "./IScheduleService";

export class ScheduleService implements IScheduleService{

    private scheduleRepository = new ScheduleRepository();
    
    list(bookingId: string): string[] {

        return this.scheduleRepository.getAllIdsSchedules(bookingId);

    }
    listDetail(id:string): ScheduleModel[] {
        return this.scheduleRepository.getScheduleById(id);
    }

    listByBookigId(bookingId: string): ScheduleModel[] {
        return this.scheduleRepository.getSchedulesByBookingId(bookingId);
    }

}