import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class HealthcheckController {
  @Get()
  getHealthcheck() {
    return 'boom boom';
  }
}
