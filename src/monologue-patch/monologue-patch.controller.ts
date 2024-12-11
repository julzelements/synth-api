import { Controller, Get } from '@nestjs/common';

@Controller('monologue-patch')
export class MonologuePatchController {
  @Get()
  findAll(): string {
    return 'Monologue Patch';
  }
}