import { Injectable } from '@nestjs/common';
import { SampleGetRepositoryInterface } from '../interfaces/sample-get.repository.interface';
import { SamplePostRepositoryInterface } from '../interfaces/sample-post.repository.interface';
import { SampleNameValueObject } from '../value-objects/sample-name.value-object';
import { Prisma, PrismaClient, SampleTransaction } from '@prisma/client';
import { PrismaClientInstance } from 'src/prisma/prisma-client-instance';

@Injectable()
export class SamplePostRepository implements SamplePostRepositoryInterface {

    constructor() { }

    async create(sampleNameValueObject: SampleNameValueObject, tx: Prisma.TransactionClient): Promise<SampleTransaction> {

        const name = sampleNameValueObject.value;

        const result = await tx.sampleTransaction.create({
            data: { name },
        });

        return result;
    }
}