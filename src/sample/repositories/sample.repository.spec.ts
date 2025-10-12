import { SampleRepository } from "./sample.repository";

describe('Sample', () => {
  it('should be defined', () => {
    expect(new SampleRepository()).toBeDefined();
  });
});
