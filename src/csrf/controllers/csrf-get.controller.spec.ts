import { Test, TestingModule } from '@nestjs/testing';
import { CsrfGetController } from './csrf-get.controller';

describe('CsrfGetController', () => {
  let controller: CsrfGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsrfGetController],
    }).compile();

    controller = module.get<CsrfGetController>(CsrfGetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
