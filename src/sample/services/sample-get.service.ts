import { Injectable } from '@nestjs/common';
import { SampleGetServiceInterface } from '../interfaces/sample-get.service.interface';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';

@Injectable()
export class SampleGetService implements SampleGetServiceInterface {

    getResponse(): SampleGetResponseDto {

        return {
            status: 200,
            message: 'sample GET response'
        };
    }
}
