import { Inject, Injectable } from '@nestjs/common';
import { SampleGetServiceInterface } from '../interfaces/sample-get.service.interface';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';
import type { SampleGetRepositoryInterface } from '../interfaces/sample-get.repository.interface';
import { SampleIdValueObject } from '../value-objects/sample-id.value-object';

@Injectable()
export class SampleGetService implements SampleGetServiceInterface {

    constructor(@Inject(`SampleGetRepositoryInterface`) private sampleGetRepositoryInterface: SampleGetRepositoryInterface) { }

    async getSampleData(sampleId: SampleIdValueObject) {

        const result = await this.sampleGetRepositoryInterface.find(sampleId);

        return result;
    }
}
