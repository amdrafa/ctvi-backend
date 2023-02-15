import { UserModel } from "../model/UserModel";

export interface UserProps {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    document: string;
    isForeigner: boolean;
}

export interface IUserService{

    list():UserModel[];

    create({}:UserProps):void;

}