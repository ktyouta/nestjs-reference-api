import { Body, Controller, Inject, Post } from '@nestjs/common';
import type { SamplePostServiceInterface } from '../interfaces/sample-post.service.interface';
import { SamplePostDto } from '../dto/sample-post.dto';
import { SampleNameValueObject } from '../value-objects/sample-name.value-object';

@Controller('v1/sample')
export class SamplePostController {

    constructor(@Inject(`SamplePostServiceInterface`) private samplePostServiceInterface: SamplePostServiceInterface) { }

    @Post()
    async execute(@Body() dto: SamplePostDto) {

        const sampleName = new SampleNameValueObject(dto.name);

        const result = await this.samplePostServiceInterface.create(sampleName);

        return {
            status: 200,
            message: 'sample POST response',
            data: result,
        };
    }
}
