import { ScheduleModel } from "../model/ScheduleModel";
import { ScheduleRepository } from "../repositories/ScheduleRepository";
import { IScheduleService } from "./IScheduleService";

export class ScheduleService implements IScheduleService{
    list(bookingId: string): string[] {

        const scheduleRepository = new ScheduleRepository();
        return scheduleRepository.getAllIdsSchedules(bookingId);

    }
    listDetail(id:string[]): ScheduleModel[] {
        throw new Error("Method not implemented.");
    }

}