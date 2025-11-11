import { Test, TestingModule } from '@nestjs/testing';
import { SampleGetService } from './sample-get.service';
import { SampleModule } from '../sample.module';
import { SampleIdValueObject } from '../value-objects/sample-id.value-object';

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

  it('should return the sample find response', async () => {

    const sampleId = new SampleIdValueObject(1);

    const result = await service.getSampleData(sampleId);

    expect(result).toEqual({
      id: 1,
      name: `test`
    });
  });
});
