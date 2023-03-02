import { TermsModel } from './../../model/TermsModel';
import { TermsService } from './../terms/TermsService';
import { ScheduleModel } from './../../model/ScheduleModel';
import { BookingModel } from "../../model/BookingModel";
import { IBookingService } from "./IBookingService";
import { BookingRepository } from "../../repositories/BookingRepository";
import { ScheduleService } from "../schedule/ScheduleService";
import { StatusEnum } from "../../enums/statusEnumerator";
import { Request } from "express";
import { Converter } from "../../utils/Converter";
import { UpdateResult } from "typeorm";
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class BookingService implements IBookingService {
    
    private converter = new Converter()
    
    private bookingRepository = new BookingRepository;
  
    async list(): Promise<BookingModel[]> {
        
        return await this.bookingRepository.getAllBookings();

    }

    async listByBookingIdDetail(bookingId: string ): Promise<BookingModel> {

        return await this.bookingRepository.getByBookingId(bookingId)

    }

    async listByIdDetail(id: number): Promise<BookingModel> {

        return await this.bookingRepository.getById(id)

    }

    async listSchedulesByBookingID(id:number): Promise<BookingModel>{
        return await this.bookingRepository.getById(id)
    }

    async create(request: Request): Promise<BookingModel> {
        request.body.terms = this.insertTerms(request)
        return await this.bookingRepository.createBooking(request.body)

    }

    async createWithSchedules(request: Request) : Promise<BookingModel> {
        let scheduleService = new ScheduleService()
        let booking = new BookingModel()
        booking = await this.bookingRepository.createBookingWithSchedules(request.body.booking)
        await scheduleService.createWithArray(request.body.scheduleArray, booking)
        return booking
    }

    async updateBooking(request: Request): Promise<UpdateResult> {
        return this.bookingRepository.updateBooking(request.body)
    }

    async updateTermsByBookingId(request: Request) {
        const currentBooking = await this.bookingRepository.getById(Number(request.params.id))
        currentBooking.terms = await this.insertTerms(request)
        return await this.bookingRepository.createBooking(currentBooking)
    }
    
    async deleteById(id: number): Promise<UpdateResult> {
        
        return await this.bookingRepository.deleteById(id);

    }

    async deleteByBookingId(bookingId: string): Promise<UpdateResult> {
        
        return await this.bookingRepository.deleteByBookingId(bookingId);

    }

    async insertTerms(request: Request): Promise<TermsModel[]>{
        return this.mappingTerms(request.body.terms)
    }

    async mappingTerms(mapping: Number[]): Promise<TermsModel[]>{
        const termsService = new TermsService()
        let termsSearched: TermsModel[] = []
        mapping.map( async (terms: number) =>{
            let newTerms = new TermsModel()
            newTerms = await termsService.listById(terms)
            termsSearched.push(newTerms)
        })
        return termsSearched
    }

    async approveBooking(resquest: Request){
        let booking = await this.bookingRepository.getById(Number(resquest.params.id))
        booking.status = StatusEnum.Approved
        booking.schedules.map((schedule)=>{
            if(schedule.status == StatusEnum.PreApproved){
                schedule.status = StatusEnum.Approved
            }
        })
        return await this.bookingRepository.createBookingWithSchedules(booking)
    }
    
}