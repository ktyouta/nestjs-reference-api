import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from 'src/sample/dto/sample-get-response.dto';
import { SampleGetServiceInterface } from 'src/sample/interfaces/sample-get.service.interface';

@Injectable()
export class SampleGetServiceMock implements SampleGetServiceInterface {

    getResponse(): SampleGetResponseDto {

        return {
            status: 200,
            message: 'sample mock GET response'
        };
    }

    async getSampleData(id: number) {

        return {
            name: ``,
            id: 1
        };
    }
}
