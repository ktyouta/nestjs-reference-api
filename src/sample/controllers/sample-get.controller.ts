import { Controller, Get, Inject, Query } from '@nestjs/common';
import type { SampleGetServiceInterface } from '../interfaces/sample-get.service.interface';
import { SampleGetQueryDto } from '../dto/sample-get-query.dto';
import { SampleIdValueObject } from '../value-objects/sample-id.value-object';

@Controller('v1/sample')
export class SampleGetController {

    constructor(@Inject(`SampleGetServiceInterface`) private sampleGetServiceInterface: SampleGetServiceInterface) { }

    @Get()
    async execute(@Query() query: SampleGetQueryDto) {

        const sampleId = new SampleIdValueObject(query.id);

        const sampleData = await this.sampleGetServiceInterface.getSampleData(sampleId);

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
