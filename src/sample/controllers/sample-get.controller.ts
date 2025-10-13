import { Controller, Get } from '@nestjs/common';

@Controller('v1/sample')
export class SampleGetController {

    @Get()
    execute() {

        return {
            status: 200,
            message: 'sample GET response'
        };
    }
}
