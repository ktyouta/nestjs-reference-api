import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SampleGetRepositoryInterface } from '../interfaces/sample-get.repository.interface';

@Injectable()
export class SampleGetRepository implements SampleGetRepositoryInterface {

    constructor(private readonly prisma: PrismaService) { }

    async find(id:number) {

        return this.prisma.sampleTransaction.findUnique({
            where:{
                id
            }
        });
    }

    async findAll() {
        return this.prisma.sampleTransaction.findMany();
    }

    async create(data: { name: string }) {
        return this.prisma.sampleTransaction.create({ data });
    }

    async delete(id: number) {
        return this.prisma.sampleTransaction.delete({ where: { id } });
    }
}