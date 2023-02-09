export class BookingModel{
    constructor(){
        this.id = null;
        this.bookingId = null;
        this.userId = null;
        this.scheduleId = null;
        this.dataInicial = null;
        this.dataFinal = null;
        this.status = null;
        this.createdAt = null;
        this.deletedAt = null;
        this.updatedAt = null;
    }

    id: number;
    bookingId: string;
    userId: number;
    scheduleId: Array<number>;
    dataInicial: Date;
    dataFinal: Date;
    status: Enumerator;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;

    
}
