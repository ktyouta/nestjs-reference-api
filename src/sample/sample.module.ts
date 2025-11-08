import { Module } from '@nestjs/common';
import { SampleGetController } from './controllers/sample-get.controller';
import { SampleGetService } from './services/sample-get.service';
import { SampleGetRepository } from './repositories/sample-get.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { SamplePostController } from './controllers/sample-post.controller';
import { SamplePostService } from './services/sample-post.service';
import { SamplePostRepository } from './repositories/sample-post.repository';

@Module({
    controllers: [
        SampleGetController,
        SamplePostController,
    ],
    providers: [
        {
            provide: `SampleGetServiceInterface`,
            useClass: SampleGetService
        },
        {
            provide: `SampleGetRepositoryInterface`,
            useClass: SampleGetRepository
        },
        {
            provide: `SamplePostServiceInterface`,
            useClass: SamplePostService
        },
        {
            provide: `SamplePostRepositoryInterface`,
            useClass: SamplePostRepository
        },
        PrismaService
    ],
})

export class SampleModule { }