import { Test, TestingModule } from '@nestjs/testing';
import { SamplePostController } from './sample-post.controller';
import { SampleModule } from '../sample.module';
import { ValidationPipe } from '@nestjs/common';

describe('SamplePostController', () => {
  let controller: SamplePostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SampleModule],
    }).compile();

    const app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
    await app.init();

    controller = module.get<SamplePostController>(SamplePostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
