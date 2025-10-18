import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';
import { SampleTransaction } from 'generated/prisma';

export interface SampleGetServiceInterface {

    getResponse(): SampleGetResponseDto;

    getSampleData(id: number): Promise<SampleTransaction | null>
}
