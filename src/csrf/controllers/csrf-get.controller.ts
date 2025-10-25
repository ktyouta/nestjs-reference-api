import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';

interface CsrfRequest extends Request {
    csrfToken(): string;
}

@Controller('v1/csrf')
export class CsrfGetController {

    @Get()
    execute(@Req() req: CsrfRequest) {

        const token = req.csrfToken();

        return {
            status: 200,
            csrfToken: token
        }
    }
}
