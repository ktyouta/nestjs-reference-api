import { Body, Controller, Inject, Post } from '@nestjs/common';
import type { SamplePostServiceInterface } from '../interfaces/sample-post.service.interface';
import { SamplePostDto } from '../dto/sample-post.dto';
import { SampleNameValueObject } from '../value-objects/sample-name.value-object';
import { PrismaTransaction } from 'src/prisma/prisma-transaction';
import { Prisma } from '@prisma/client';
import { HTTP_STATUS } from 'src/common/constants/http-status';

@Controller('v1/sample')
export class SamplePostController {

    constructor(@Inject(`SamplePostServiceInterface`) private samplePostServiceInterface: SamplePostServiceInterface) { }

    @Post()
    async execute(@Body() dto: SamplePostDto) {

        const sampleName = new SampleNameValueObject(dto.name);

        return PrismaTransaction.start(async (tx: Prisma.TransactionClient) => {

            const result = await this.samplePostServiceInterface.create(sampleName, tx);

            return {
                status: HTTP_STATUS.OK,
                message: 'success',
                data: result,
            };
        });
    }
}
