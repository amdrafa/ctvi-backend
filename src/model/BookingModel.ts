export class BookingModel{
    constructor(){
        this.id = null;
        this.bookingId = null;
        this.userId = null;
        this.scheduleId = null;
        this.status = null;
        this.createdAt = null;
        this.deletedAt = null;
        this.updatedAt = null;
    }

    id: number;
    bookingId: string;
    userId: number;
    scheduleId: Array<number>;
    status: Enumerator;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;

    
}
