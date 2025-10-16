import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';

export interface SampleGetRepositoryInterface {

    find(): Promise<{
        id: number,
        name: string
    }>;
}
