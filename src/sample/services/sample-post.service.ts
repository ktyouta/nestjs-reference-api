import { Inject, Injectable } from '@nestjs/common';
import type { SamplePostRepositoryInterface } from '../interfaces/sample-post.repository.interface';
import { SampleNameValueObject } from '../value-objects/sample-name.value-object';
import { SampleTransaction } from 'generated/prisma';

@Injectable()
export class SamplePostService implements SamplePostRepositoryInterface {

    constructor(@Inject(`SamplePostRepositoryInterface`) private samplePostRepositoryInterface: SamplePostRepositoryInterface) { }

    async create(sampleNameValueObject: SampleNameValueObject): Promise<SampleTransaction> {

        const result = await this.samplePostRepositoryInterface.create(sampleNameValueObject);

        return result;
    }
}
