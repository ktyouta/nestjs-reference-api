import { Test, TestingModule } from '@nestjs/testing';
import { SampleGetController } from './sample-get.controller';
import { SampleModule } from '../sample.module';
import { SampleGetQueryDto } from '../dto/sample-get-query.dto';
import { ValidationPipe } from '@nestjs/common';

describe('SampleGetController', () => {
  let controller: SampleGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SampleModule],
    }).compile();

    const app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
    await app.init();

    controller = module.get<SampleGetController>(SampleGetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the sample GET response', async () => {

    const sampleGetQueryDto = new SampleGetQueryDto();
    sampleGetQueryDto.id = 1;

    const result = await controller.execute(sampleGetQueryDto);

    expect(result).toEqual({
      status: 200,
      message: 'sample GET response',
    });
  });

  it('should return the sample GET no response', async () => {

    const sampleGetQueryDto = new SampleGetQueryDto();
    sampleGetQueryDto.id = 2;

    const result = await controller.execute(sampleGetQueryDto);

    expect(result).toEqual({
      status: 200,
      message: 'sample GET no response',
    });
  });
});
