import { Module } from '@nestjs/common';
import { SampleGetController } from './controllers/sample-get.controller';
import { SampleGetService } from './services/sample-get.service';
import { SampleGetRepository } from './repositories/sample-get.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [SampleGetController],
    providers: [
        {
            provide: `SampleGetServiceInterface`,
            useClass: SampleGetService
        },
        {
            provide: `SampleGetRepositoryInterface`,
            useClass: SampleGetRepository
        },
        PrismaService
    ],
})

export class SampleModule { }