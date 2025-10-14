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

  it('should return the sample GET response', () => {

    const result = controller.execute();

    expect(result).toEqual({
      status: 200,
      message: 'sample GET response',
    });
  });
});
