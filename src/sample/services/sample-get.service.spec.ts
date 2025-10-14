import { Test, TestingModule } from '@nestjs/testing';
import { SampleGetService } from './sample-get.service';
import { SampleModule } from '../sample.module';
import { SampleGetServiceMock } from './__mocks__/sample-get.service.mock';

describe('SampleGetService', () => {
  let service: SampleGetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SampleModule],
    })
      // .overrideProvider(SampleGetServiceInterface)
      // .useClass(SampleGetServiceMock)
      .compile();

    service = module.get<SampleGetService>(SampleGetService);
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
