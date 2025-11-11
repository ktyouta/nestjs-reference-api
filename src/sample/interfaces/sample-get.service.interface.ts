import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';
import { SampleTransaction } from 'generated/prisma';
import { SampleIdValueObject } from '../value-objects/sample-id.value-object';

export interface SampleGetServiceInterface {

    getSampleData(sampleId: SampleIdValueObject): Promise<SampleTransaction | null>
}
