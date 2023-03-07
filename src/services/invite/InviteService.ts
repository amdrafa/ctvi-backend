import { UpdateResult } from 'typeorm';
import { Request } from 'express';
import { InviteRepository } from '../../repositories/InviteRepository';
import { InviteModel } from "../../model/InviteModel";
import { IInviteService } from './IIinviteService';

export class InviteService implements IInviteService{

    inviteRepository = new InviteRepository()

    async list(): Promise<InviteModel[]> {
        return await this.inviteRepository.getAllInvites()
    }

    async listDetail(id:number): Promise<InviteModel>{
        return await this.inviteRepository.getInviteByID(id)
    }

    async create(request: Request): Promise<InviteModel>{
        return await this.inviteRepository.createInvite(request.body)
    }

    async update(request: Request): Promise<UpdateResult>{
        return await this.inviteRepository.updateInvite(request.body) 
    }

    async delete(id: number): Promise<UpdateResult>{
        return await this.inviteRepository.deleteInvite(id)
    }
}