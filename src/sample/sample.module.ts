import { Module } from '@nestjs/common';
import { SampleGetController } from './controllers/sample-get.controller';
import { SampleGetService } from './services/sample-get.service';

@Module({
    controllers: [SampleGetController],
    providers: [
        {
            provide: `SampleGetServiceInterface`,
            useClass: SampleGetService
        }
    ]
})

export class SampleModule { }