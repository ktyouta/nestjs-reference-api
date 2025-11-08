import { Inject, Injectable } from '@nestjs/common';
import type { SamplePostRepositoryInterface } from '../interfaces/sample-post.repository.interface';

@Injectable()
export class SamplePostService {

    constructor(@Inject(`SamplePostRepositoryInterface`) private samplePostRepositoryInterface: SamplePostRepositoryInterface) { }


}
