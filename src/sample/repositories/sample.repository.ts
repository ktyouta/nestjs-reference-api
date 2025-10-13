import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SampleRepository {

    constructor(private readonly prisma: PrismaService) { }

    async findAll() {
        return this.prisma.sample.findMany();
    }

    async create(data: { name: string }) {
        return this.prisma.sample.create({ data });
    }

    async delete(id: number) {
        return this.prisma.sample.delete({ where: { id } });
    }
}