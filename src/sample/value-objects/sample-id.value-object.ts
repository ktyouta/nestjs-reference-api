export class SampleIdValueObject {

    private readonly _value: number;

    constructor(id: number) {

        if (id < 1) {
            throw Error(`Invalid number`);
        }

        this._value = id;
    }

    get value() {
        return this._value;
    }
}