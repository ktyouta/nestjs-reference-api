export class SampleIdValueObject {

    private readonly _id: number;

    constructor(id: number) {

        if (id < 1) {
            throw Error(`Invalid number`);
        }

        this._id = id;
    }

    get value() {
        return this._id;
    }
}