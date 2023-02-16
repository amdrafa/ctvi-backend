import { ScheduleModel } from './../model/ScheduleModel';


export class ScheduleRepository{

    public getAllSchedules(): ScheduleModel[]{
        return require("../test/mockup/bookingId.json")
    }

    public getAllSchedulesByBookingId(bookingId:string): ScheduleModel[]{
        return require("../test/mockup/bookingId.json")
    }

    public getScheduleById(bookingId:string): any {
        return require("../test/mockup/bookingId.json")
    }

    

}