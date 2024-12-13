import { Body, Controller, Get, Post } from '@nestjs/common';
import { PresetsDto } from './dto/presets.dto';
import { PresetsService } from './presets.service';
import { Preset } from './interfaces/preset.interface';

@Controller('presets')
export class PresetsController {
  constructor(private presetsService: PresetsService) {}
  @Get()
  async findAll(): Promise<Preset[]> {
    return this.presetsService.findAll();
  }
  @Post()
  create(@Body() preset: PresetsDto) {
    this.presetsService.create(preset);
  }
}
