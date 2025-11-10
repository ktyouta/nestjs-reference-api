export class SampleNameValueObject {

    private readonly _value: string;

    constructor(value: string) {

        if (!value || value.length < 1) {
            throw Error(`Invalid value`);
        }

        this._value = value;
    }

    get value() {
        return this._value;
    }
}