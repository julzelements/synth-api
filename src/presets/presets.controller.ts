import { Body, Controller, Get, Post } from '@nestjs/common';
import { PresetsService } from './presets.service';
import { Preset } from './interfaces/preset.interface';
import { CreatePresetDto } from './dto/create-preset.dto';

@Controller('presets')
export class PresetsController {
  constructor(private presetsService: PresetsService) {}
  @Get()
  async findAll(): Promise<Preset[]> {
    return this.presetsService.findAll();
  }
  @Post()
  create(@Body() preset: CreatePresetDto): Promise<Preset> {
    return this.presetsService.create(preset);
  }
}
