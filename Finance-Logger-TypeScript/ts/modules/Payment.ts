import { HasFormatter } from "./HasFormatter";

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amoutn: number,
    ){}

    format() {
        return `${this.recipient} is owed €${this.amoutn} for ${this.details}`
    }
}