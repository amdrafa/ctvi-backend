import { Request } from "express";
import { StatusEnum } from "../../enums/statusEnumerator";
import { ScheduleModel } from "../../model/ScheduleModel";
import { ScheduleRepository } from "../../repositories/ScheduleRepository";
import { IScheduleService } from "./IScheduleService";

export class ScheduleService implements IScheduleService{
    

    private scheduleRepository = new ScheduleRepository();

    async listDetail(id:number): Promise<ScheduleModel> {
        return await this.scheduleRepository.getScheduleById(id);
    }
    
    async listByBookingId(bookingId: number): Promise<ScheduleModel[]> {

        return await this.scheduleRepository.getAllSchedulesByBookingId(bookingId);

    }

    async create(request: Request): Promise<ScheduleModel[]> {

        const schedules: ScheduleModel[] = request.body;

        const createdSchedules: ScheduleModel[] = []

        let newSchedule = null;

        schedules.forEach(async (schedule) => {

            const IsScheduleAvaiable = this.scheduleRepository.verifyIfScheduleExistsByDateByInicialDate(schedule.startDate, schedule.finalDate)

            if(IsScheduleAvaiable){
                schedule.status = StatusEnum.PreApproved
                newSchedule = await this.scheduleRepository.create(schedule)
            }else{
                schedule.
            }
            createdSchedules.push(newSchedule);
            
        })

        return createdSchedules
    }

}