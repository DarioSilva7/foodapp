import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('status')
  getStatus(): { status: string } {
    return { status: 'Online' };
  }
}
