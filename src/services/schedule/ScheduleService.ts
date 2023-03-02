import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import moment from "moment";
import { ParsedQs } from "qs";
import { StatusEnum } from "../../enums/statusEnumerator";
import { BookingModel } from "../../model/BookingModel";
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

        const schedules: ScheduleModel[] = await this.splitArrayInDays(request.body);

        return await this.splitSchedules(schedules)
    }

    async createWithArray(schedules: Promise<ScheduleModel[]>, booking: BookingModel): Promise<ScheduleModel[]> {

        const newSchedulesArray: ScheduleModel[] = await this.splitArrayInDays(schedules);
        newSchedulesArray.map(schedule =>{
            schedule.booking = booking
        })
        return await this.splitSchedules(newSchedulesArray)
    }

    async splitSchedules(schedules) : Promise<ScheduleModel[]>{
        let createdSchedules: ScheduleModel[] = []

        await schedules.forEach(async (schedule: ScheduleModel) => {

            let IsScheduleAvaiable = await this.scheduleRepository.verifyIfScheduleExistsByDateByInicialDate(schedule.startDate, schedule.finalDate)

            if(IsScheduleAvaiable){
                schedule.status = StatusEnum.PreApproved
            }else{
                schedule.status = StatusEnum.NotAvailable
            }
            createdSchedules.push(await this.scheduleRepository.create(schedule)) 
        })
        return createdSchedules
    }

    async splitArrayInDays(scheduleModel: Promise<ScheduleModel[]>){
        let schedulesPorDia: ScheduleModel[] = [];
        console.log(scheduleModel);
        (await scheduleModel).forEach(schedule => {
            let dataInicial = moment(schedule.startDate);
            let dataFinal = moment(schedule.finalDate);
            let diaInicial = dataInicial.date();
            let diaFinal = dataFinal.date();
            let diasTotais = diaFinal - diaInicial;
            
            for (let i = 0; i <= diasTotais; i++) {
                let novoSchedule = new ScheduleModel;
                novoSchedule.status = schedule.status
                novoSchedule.isExclusive = schedule.isExclusive
                if(i==0){
                    //primeiro item
                    novoSchedule.startDate = dataInicial.toDate()
                    novoSchedule.finalDate = dataInicial.hour(18).toDate()
                }else{
                    let dataDoDia = dataInicial.add(1, 'days').toDate()
                    if(i == diasTotais){
                        //último item
                        novoSchedule.startDate = dataFinal.hour(8).toDate()
                        novoSchedule.finalDate = dataFinal.toDate()
                    }else{
                        novoSchedule.startDate = moment(dataDoDia).hour(8).toDate()
                        novoSchedule.finalDate = moment(dataDoDia).hour(18).toDate()
                    }
                }
                schedulesPorDia.push(novoSchedule)
            }
        });
        return schedulesPorDia
    }

    async approveSchedule(request: Request): Promise<ScheduleModel> {
        let schedule = await this.scheduleRepository.getScheduleById(Number(request.params.id))
        if(schedule && schedule.status == StatusEnum.PreApproved){
            schedule.status = StatusEnum.Approved
            return this.scheduleRepository.create(schedule)
        }
        
    }
}