import { PrismaService } from "src/prisma/prisma.service";
import { SampleGetRepository } from "./sample-get.repository";

describe('Sample', () => {
  it('should be defined', () => {
    expect(new SampleGetRepository()).toBeDefined();
  });
});
