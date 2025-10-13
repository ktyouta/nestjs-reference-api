import { Module } from '@nestjs/common';
import { SampleGetController } from './controllers/sample-get.controller';

@Module({
    controllers: [SampleGetController],
})

export class SampleModule { }