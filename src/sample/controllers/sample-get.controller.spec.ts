import { Test, TestingModule } from '@nestjs/testing';
import { SampleGetController } from './sample-get.controller';
import { SampleModule } from '../sample.module';

describe('SampleGetController', () => {
  let controller: SampleGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SampleModule],
    }).compile();

    controller = module.get<SampleGetController>(SampleGetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the sample GET response',async () => {

    const result = await controller.execute(`1`);

    expect(result).toEqual({
      status: 200,
      message: 'sample GET response',
    });
  });

  it('should return the sample GET no response',async () => {

    const result = await controller.execute(`2`);

    expect(result).toEqual({
      status: 200,
      message: 'sample GET no response',
    });
  });
});
