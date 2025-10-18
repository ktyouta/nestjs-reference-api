import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';
import { SampleTransaction } from 'generated/prisma';

export interface SampleGetRepositoryInterface {

    find(id:number):Promise<SampleTransaction | null>;
}
