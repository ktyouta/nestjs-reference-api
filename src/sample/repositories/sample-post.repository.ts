import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SampleGetRepositoryInterface } from '../interfaces/sample-get.repository.interface';
import { SamplePostRepositoryInterface } from '../interfaces/sample-post.repository.interface';

@Injectable()
export class SamplePostRepository implements SamplePostRepositoryInterface {

    constructor(private readonly prisma: PrismaService) { }

}