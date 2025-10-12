import { Test, TestingModule } from '@nestjs/testing';
import { SampleGetService } from './sample-get.service';

describe('SampleGetService', () => {
  let service: SampleGetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleGetService],
    }).compile();

    service = module.get<SampleGetService>(SampleGetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
