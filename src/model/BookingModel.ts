export class BookingModel{
    id?: number;
    bookingId: string;
    userId: number;
    scheduleId: Array<number>;
    status: Enumerator;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;
}