import { Test, TestingModule } from '@nestjs/testing';
import { SampleIdValueObject } from '../sample-id.value-object';

describe('SampleIdValueObject', () => {

    it('should create value object for valid id', () => {
        const sampleIdValueObject = new SampleIdValueObject(1);
        expect(sampleIdValueObject.value).toBe(1);
    });

    it('should throw error for invalid id', () => {
        expect(() => new SampleIdValueObject(0)).toThrow('Invalid number');
    });

    it('should throw error for invalid id', () => {
        expect(() => new SampleIdValueObject(-1)).toThrow('Invalid number');
    });
});
