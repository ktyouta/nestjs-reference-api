import { Body, Controller, Inject, Post } from '@nestjs/common';
import type { SamplePostServiceInterface } from '../interfaces/sample-post.service.interface';
import { SamplePostDto } from '../dto/sample-post.dto';

@Controller('v1/sample')
export class SamplePostController {

    constructor(@Inject(`SamplePostServiceInterface`) private samplePostServiceInterface: SamplePostServiceInterface) { }

    @Post()
    async execute(@Body() dto: SamplePostDto) {


        return {
            status: 200,
            message: 'sample POST response'
        };
    }
}
