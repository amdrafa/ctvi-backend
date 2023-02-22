import { UserModel } from './../model/UserModel';
declare global {
    namespace Express{
        export interface Request {
            user: Partial<UserModel>
        }
    }
}