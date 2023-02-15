

export class ScheduleRepository{

    public getAllIdsSchedules(bookingId:string): [] {
        return require("../test/mockup/bookingId.json")
    }

    public getScheduleById(bookingId:string): any {
        return require("../test/mockup/bookingId.json")
    }

    public getSchedulesByBookingId(bookingId:string): [] {
        return require("../test/mockup/bookingId.json")
    }

}