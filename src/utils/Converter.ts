import moment from "moment";
export class Converter {
    converterToDate(date:Date): Date{

        try {
            if(moment(date).isValid()){
                return new Date(date);
            }
        } catch (error) {
            throw new Error('Invalid date parameter')
        }
    }
}