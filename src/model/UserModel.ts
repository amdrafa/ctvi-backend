import { RolesEnum } from "../enums/roleEnumerator";

export class UserModel {
    constructor(){
        this.id= null;
        this.name= null;
        this.email= null;
        this.password= null;
        this.companyId= null;
        this.document= null;
        this.isForeigner = null;
        this.roles= null;
        this.createdAt= null;
        this.deletedAt= null;
        this.updatedAt= null;
    };

    id: number;
    name: string;
    email: string;
    password: string;
    companyId: number;
    document: string;
    isForeigner: boolean;
    roles: Enumerator<RolesEnum>;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;
}