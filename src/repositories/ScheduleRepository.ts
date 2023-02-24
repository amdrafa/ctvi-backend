import { TypeORMDataSource } from '../config/DataSourceConnection';
import { ScheduleModel } from './../model/ScheduleModel';


export class ScheduleRepository{

    repository = TypeORMDataSource.getRepository(ScheduleModel)

    public async getScheduleById(id:number): Promise<ScheduleModel> {
        return await this.repository.findOneBy({id: id })
    }

    public async getAllSchedulesByBookingId(id:number): Promise<ScheduleModel[]>{
        return await this.repository.find({relations: {booking: true}, where: {id: id}})
    }

    public async create(schedule: ScheduleModel): Promise<ScheduleModel>{
        return await this.repository.save(schedule);
    }

    public async verifyIfScheduleExistsByDateByInicialDate(startDate: Date, finalDate: Date): Promise<boolean>{
        const schedule = await this.repository.createQueryBuilder("schedule")
        .from(ScheduleModel, "schedule")
        .where("schedule.startDate = :startDate", {startDate:startDate})
        .andWhere("schedule.finalDate = :finalDate", {finalDate:finalDate})
        .andWhere("schedule.is_exclusive = true").getOne()

        return schedule ? false : true;
    }
    

}