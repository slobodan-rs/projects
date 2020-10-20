export class Payment {
    constructor(recipient, details, amoutn) {
        this.recipient = recipient;
        this.details = details;
        this.amoutn = amoutn;
    }
    format() {
        return `${this.recipient} is owed €${this.amoutn} for ${this.details}`;
    }
}
