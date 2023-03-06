import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import moment from "moment";
import { ParsedQs } from "qs";
import { UpdateResult } from "typeorm";
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

    async update(request: Request): Promise<UpdateResult> {

        return await this.scheduleRepository.updateSchedule(request.body);

    }

    async create(request: Request): Promise<ScheduleModel[]> {

        const schedules: ScheduleModel[] = await this.splitArrayInDays(request.body);

        return await this.splitSchedules(schedules)
    }

    async createWithArray(schedules: ScheduleModel[], booking: BookingModel): Promise<ScheduleModel[]> {
        const newSchedulesArray: ScheduleModel[] = await this.splitArrayInDays(schedules);
        newSchedulesArray.map(schedule =>{
            schedule.booking = booking
        })
        return await this.splitSchedules(newSchedulesArray)
    }

    async splitSchedules(schedules) : Promise<ScheduleModel[]>{
        let createdSchedules: ScheduleModel[] = []
        
        await schedules.forEach(async (schedule: ScheduleModel) => {
            
            let IsScheduleAvailable = await this.scheduleRepository.verifyIfScheduleExistsByDateByInicialDate(schedule.startDate, schedule.finalDate)
            console.log(IsScheduleAvailable)
            if(IsScheduleAvailable){
                schedule.status = StatusEnum.Pending
            }else{
                schedule.status = StatusEnum.NotAvailable
            }
            createdSchedules.push(await this.scheduleRepository.create(schedule)) 
        })
        return createdSchedules
    }

    async splitArrayInDays(scheduleModel: ScheduleModel[]){
        let schedulesPorDia: ScheduleModel[] = [];

        scheduleModel.forEach(schedule => {
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
        if(schedule && schedule.status == StatusEnum.Pending){
            schedule.status = StatusEnum.Approved
            return this.scheduleRepository.create(schedule)
        }
        
    }

    async delete(id: Number): Promise<UpdateResult> {
    
    return this.scheduleRepository.delete(id)
        
        
    }
}