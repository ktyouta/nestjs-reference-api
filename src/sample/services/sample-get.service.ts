import { Inject, Injectable } from '@nestjs/common';
import { SampleGetServiceInterface } from '../interfaces/sample-get.service.interface';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';
import type { SampleGetRepositoryInterface } from '../interfaces/sample-get.repository.interface';

@Injectable()
export class SampleGetService implements SampleGetServiceInterface {

    constructor(@Inject(`SampleGetRepositoryInterface`) private sampleGetRepositoryInterface: SampleGetRepositoryInterface) { }

    getResponse(): SampleGetResponseDto {

        return {
            status: 200,
            message: 'sample GET response'
        };
    }

    async getSampleData(id:number){

        const result = await this.sampleGetRepositoryInterface.find(id);

        return result;
    }

    async getFindSample() {

        const result = await this.sampleGetRepositoryInterface.find(1);
        return result;
    }
}
