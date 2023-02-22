import { UserModel } from "../model/UserModel"

export class UserRepository{

    public getAllUsers(): [] {
        return require("../test/mockup/user.json")
    }

    public getUserById(id: number): UserModel {
        return require("../test/mockup/user.json")
    }

    public getLogin(): [] {
        return require("../test/mockup/user.json")
    }

    public createUser(user: UserModel): UserModel {
        return require("../test/mockup/user.json")
    }

    public updateUser(user: UserModel): UserModel {
        return require("../test/mockup/user.json")
    }

    public deleteUser(id: number) {
        return require("../test/mockup/user.json")
    }

    public getUserByEmailAndPassword(email: string, password: string): UserModel {
        const user =  require("../test/mockup/user.json")
        return user[0]
    }

}