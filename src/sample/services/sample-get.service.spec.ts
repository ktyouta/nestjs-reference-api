import { Test, TestingModule } from '@nestjs/testing';
import { SampleGetService } from './sample-get.service';
import { SampleModule } from '../sample.module';

describe('SampleGetService', () => {
  let service: SampleGetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SampleModule],
    }).compile();

    service = module.get<SampleGetService>('SampleGetServiceInterface');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the sample GET response', () => {

    const result = service.getResponse();

    expect(result).toEqual({
      status: 200,
      message: 'sample GET response',
    });
  });
});
