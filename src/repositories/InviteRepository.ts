import { TypeORMDataSource } from './../config/DataSourceConnection';
import { UpdateResult } from 'typeorm';
import { InviteModel } from './../model/InviteModel';

export class InviteRepository{

    repository = TypeORMDataSource.getRepository(InviteModel)

    public async getAllInvites(): Promise<InviteModel[]> {
        return await this.repository.find()
    }

    public async getInviteByID(id: number): Promise<InviteModel>{
        return await this.repository.findOneBy({id:id})
    }

    public async createInvite(invite: InviteModel): Promise<InviteModel>{
        return this.repository.save(this.repository.create(invite))
    }

    public async updateInvite(invite: InviteModel): Promise<UpdateResult>{
        return await this.repository.update({id: invite.id}, {...invite})
    }

    public async deleteInvite(id:number): Promise<UpdateResult>{
        return await this.repository.softDelete({id:id})
    }

}