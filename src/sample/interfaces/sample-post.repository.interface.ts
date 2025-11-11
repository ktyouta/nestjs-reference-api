import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';
import { SampleTransaction } from 'generated/prisma';
import { SampleNameValueObject } from '../value-objects/sample-name.value-object';
import { Prisma } from '@prisma/client';

export interface SamplePostRepositoryInterface {

    create(sampleNameValueObject: SampleNameValueObject, tx: Prisma.TransactionClient): Promise<SampleTransaction>;
}
