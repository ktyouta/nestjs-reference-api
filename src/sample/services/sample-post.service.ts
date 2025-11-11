import { Inject, Injectable } from '@nestjs/common';
import type { SamplePostRepositoryInterface } from '../interfaces/sample-post.repository.interface';
import { SampleNameValueObject } from '../value-objects/sample-name.value-object';
import { SampleTransaction } from 'generated/prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class SamplePostService implements SamplePostRepositoryInterface {

    constructor(@Inject(`SamplePostRepositoryInterface`) private samplePostRepositoryInterface: SamplePostRepositoryInterface) { }

    async create(sampleNameValueObject: SampleNameValueObject, tx: Prisma.TransactionClient): Promise<SampleTransaction> {

        const result = await this.samplePostRepositoryInterface.create(sampleNameValueObject, tx);

        return result;
    }
}
