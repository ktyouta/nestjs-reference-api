import { SampleRepository } from "./sample.repository";

describe('Sample', () => {
  it('should be defined', () => {

    const mockPrisma = {} as any;
    expect(new SampleRepository(mockPrisma)).toBeDefined();
  });
});
