import { UpdateResult } from 'typeorm';
import { TypeORMDataSource } from '../config/DataSourceConnection';
import { ScheduleModel } from './../model/ScheduleModel';


export class ScheduleRepository{

    repository = TypeORMDataSource.getRepository(ScheduleModel)

    public async getScheduleById(id:number): Promise<ScheduleModel> {
        return await this.repository.findOne({where:{id: id}, relations: {booking:true, resource:true} })
    }

    public async getAllSchedulesByBookingId(id:number): Promise<ScheduleModel[]>{
        return await this.repository.find({relations: {booking: true, resource:true}, where: {id: id}})
    }

    public async create(schedule: ScheduleModel): Promise<ScheduleModel>{
        return await this.repository.save(schedule);
    }

    public async verifyIfScheduleExistsByDateByInicialDate(startDate: Date, finalDate: Date): Promise<boolean>{
        const schedule = await this.repository.findOneBy({startDate:startDate, finalDate: finalDate, isExclusive: true})
        console.log(schedule)
        return schedule ? false : true;
    }

    public async updateSchedule(schedule: ScheduleModel): Promise<UpdateResult>{
        return await this.repository.update({id: schedule.id}, {...schedule})
    }

    public async delete(id): Promise<UpdateResult>{
        return await this.repository.softDelete(id)
    }
    

}