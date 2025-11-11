import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from 'src/sample/dto/sample-get-response.dto';
import { SampleGetServiceInterface } from 'src/sample/interfaces/sample-get.service.interface';
import { SampleIdValueObject } from 'src/sample/value-objects/sample-id.value-object';

@Injectable()
export class SampleGetServiceMock implements SampleGetServiceInterface {

    async getSampleData(sampleId: SampleIdValueObject) {

        return {
            name: ``,
            id: sampleId.value
        };
    }
}
