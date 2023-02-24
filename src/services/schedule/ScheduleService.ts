import { Request } from "express";
import moment from "moment";
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

        const schedules: ScheduleModel[] = this.splitArrayInDays(request.body);

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

    splitArrayInDays(scheduleModel: ScheduleModel[]){

        let schedulesPorDia: ScheduleModel[];
        scheduleModel.forEach(schedule => {
            let dataInicial = moment(schedule.startDate);
            let dataFinal = moment(schedule.finalDate);
            let diasTotais = dataInicial.diff(dataFinal, 'days');

            for (let i = 0; i < diasTotais; i++) {
                if(i==0){
                    schedule.finalDate = dataInicial.hour(18).toDate()
                }else{
                    let dataDoDia = dataInicial.add(1, 'days').toDate()
                    schedule.startDate = moment(dataDoDia).hour(8).toDate()
                    schedule.finalDate = moment(dataDoDia).hour(18).toDate()
                }
                schedulesPorDia.push(schedule)
            }
           
        });
        return schedulesPorDia
    }

}