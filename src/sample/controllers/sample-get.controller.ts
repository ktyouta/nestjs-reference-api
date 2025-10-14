import { Controller, Get, Inject } from '@nestjs/common';
import type { SampleGetServiceInterface } from '../interfaces/sample-get.service.interface';

@Controller('v1/sample')
export class SampleGetController {

    constructor(@Inject(`SampleGetServiceInterface`) private sampleGetServiceInterface: SampleGetServiceInterface) { }

    @Get()
    execute() {

        const res = this.sampleGetServiceInterface.getResponse();

        return res;
    }
}
