import { Injectable } from '@nestjs/common';
import { SampleGetRepositoryInterface } from 'src/sample/interfaces/sample-get.repository.interface';

@Injectable()
export class SampleGetRepositoryMock implements SampleGetRepositoryInterface {

    async find() {

        return {
            id: 1,
            name: `mock name`
        }
    }
}