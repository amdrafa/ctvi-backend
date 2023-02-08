import { v4 } from "uuid";

export class Specification {
    id?: string;

    name: string;

    description: string;

    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id === v4();
        }
    }
}