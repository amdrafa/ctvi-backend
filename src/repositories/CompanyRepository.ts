export class CompanyRepository{

    public getAllCompanies(): [] {
        return require("../test/mockup/company.json")
    }

}