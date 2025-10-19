import { Controller, Get, Inject, Query } from '@nestjs/common';
import type { SampleGetServiceInterface } from '../interfaces/sample-get.service.interface';

@Controller('v1/sample')
export class SampleGetController {

    constructor(@Inject(`SampleGetServiceInterface`) private sampleGetServiceInterface: SampleGetServiceInterface) { }

    @Get()
    async execute(@Query('id') strId: string,) {

        const id = parseInt(strId);

        const sampleData = await this.sampleGetServiceInterface.getSampleData(id);

        if (!sampleData) {
            return {
                status: 200,
                message: 'sample GET no response'
            }
        }

        return {
            status: 200,
            message: 'sample GET response'
        };
    }
}
