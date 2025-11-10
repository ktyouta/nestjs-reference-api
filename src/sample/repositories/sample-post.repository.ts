import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SampleGetRepositoryInterface } from '../interfaces/sample-get.repository.interface';
import { SamplePostRepositoryInterface } from '../interfaces/sample-post.repository.interface';
import { SampleNameValueObject } from '../value-objects/sample-name.value-object';
import { PrismaClient, SampleTransaction } from 'generated/prisma';

@Injectable()
export class SamplePostRepository implements SamplePostRepositoryInterface {

    constructor(private readonly prisma: PrismaClient) { }

    async create(sampleNameValueObject: SampleNameValueObject): Promise<SampleTransaction> {

        const name = sampleNameValueObject.value;

        const result = await this.prisma.sampleTransaction.create({
            data: { name },
        });

        return result;
    }
}