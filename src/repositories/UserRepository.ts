export class UserRepository{

    public getAllUsers(): [] {
        return require("../test/mockup/user.json")
    }

}