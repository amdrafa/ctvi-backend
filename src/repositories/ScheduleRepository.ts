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
        const schedule = this.repository.findOneBy({startDate:startDate, finalDate: finalDate, isExclusive: true})
        return schedule ? false : true;
    }
    

}