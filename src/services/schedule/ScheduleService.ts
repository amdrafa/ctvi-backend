import { ScheduleModel } from "../../model/ScheduleModel";
import { ScheduleRepository } from "../../repositories/ScheduleRepository";
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

        // moa2jv
        // Remember that if an user took 1 month of a resource,
        // 30 lines will be recorded in the data base. One for each day. 

        // add logic to validate if there is an exclusive schedule 

        return 
    }

}