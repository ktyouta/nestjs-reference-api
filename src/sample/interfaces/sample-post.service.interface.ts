import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';
import { SampleTransaction } from 'generated/prisma';
import { SampleNameValueObject } from '../value-objects/sample-name.value-object';

export interface SamplePostServiceInterface {

    create(sampleNameValueObject: SampleNameValueObject): Promise<SampleTransaction>;
}
