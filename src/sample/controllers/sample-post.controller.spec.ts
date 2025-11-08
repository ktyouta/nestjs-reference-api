import { Test, TestingModule } from '@nestjs/testing';
import { SamplePostController } from './sample-post.controller';

describe('SamplePostController', () => {
  let controller: SamplePostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamplePostController],
    }).compile();

    controller = module.get<SamplePostController>(SamplePostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
