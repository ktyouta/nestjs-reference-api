import { Injectable } from '@nestjs/common';
import { SampleGetResponseDto } from '../dto/sample-get-response.dto';

export interface SampleGetServiceInterface {

    getResponse(): SampleGetResponseDto;
}
