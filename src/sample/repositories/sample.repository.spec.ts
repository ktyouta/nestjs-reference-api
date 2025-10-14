import { SampleRepository } from "./sample.repository";
import { PrismaService } from '../../prisma/prisma.service';

describe('Sample', () => {
  it('should be defined', () => {

    expect(new SampleRepository(PrismaService)).toBeDefined();
  });
});
