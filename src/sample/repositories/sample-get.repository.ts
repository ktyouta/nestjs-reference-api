import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SampleGetRepositoryInterface } from '../interfaces/sample-get.repository.interface';
import { PrismaClientInstance } from 'src/prisma/prisma-client-instance';
import { SampleIdValueObject } from '../value-objects/sample-id.value-object';

@Injectable()
export class SampleGetRepository implements SampleGetRepositoryInterface {

    constructor() { }

    async find(sampleId: SampleIdValueObject) {

        const id = sampleId.value;

        return PrismaClientInstance.getInstance().sampleTransaction.findUnique({
            where: {
                id
            }
        });
    }
}