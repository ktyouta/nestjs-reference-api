import { Module } from '@nestjs/common';
import { CsrfGetController } from './controllers/csrf-get.controller';

@Module({
    controllers: [CsrfGetController],
})

export class CsrfModule { }