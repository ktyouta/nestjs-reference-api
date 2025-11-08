import { Test, TestingModule } from '@nestjs/testing';
import { SamplePostService } from './sample-post.service';

describe('SamplePostService', () => {
  let service: SamplePostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamplePostService],
    }).compile();

    service = module.get<SamplePostService>(SamplePostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
