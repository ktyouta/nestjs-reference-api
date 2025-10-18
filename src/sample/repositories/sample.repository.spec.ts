import { SampleGetRepository } from "./sample-get.repository";
import { PrismaService } from '../../prisma/prisma.service';

describe('Sample', () => {
  it('should be defined', () => {

    expect(new SampleGetRepository(new PrismaService())).toBeDefined();
  });
});
