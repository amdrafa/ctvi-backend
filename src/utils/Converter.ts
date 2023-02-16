export class Converter {
    converterToDate(date:Date): Date{

        try {
            const convertedDate = new Date(date);

            return convertedDate;
        } catch (error) {
            throw new Error(error)
        }
    }
}