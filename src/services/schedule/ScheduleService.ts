import { ScheduleModel } from "../model/ScheduleModel";
import { ScheduleRepository } from "../repositories/ScheduleRepository";
import { IScheduleService } from "./IScheduleService";

export class ScheduleService implements IScheduleService{
    

    private scheduleRepository = new ScheduleRepository();
    
    listByBookingId(bookingId: string): ScheduleModel[] {

        return this.scheduleRepository.getAllSchedulesByBookingId(bookingId);

    }
    listDetail(id:string): ScheduleModel[] {
        return this.scheduleRepository.getScheduleById(id);
    }

    list(bookingId: string): ScheduleModel[] {
        return this.scheduleRepository.getAllSchedules();
    }

    create(schedule: ScheduleModel): ScheduleModel {

        const exclusiveSchedules = this.scheduleRepository.getAllSchedules()
        .filter((slot) => {
            slot.isExclusive;
        });

        


        
        return 
    }

}