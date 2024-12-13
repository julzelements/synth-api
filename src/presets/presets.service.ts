import { Injectable } from '@nestjs/common';
import { Preset } from './interfaces/preset.interface';
import { initialPresets } from './data/initial-presets';
@Injectable()
export class PresetsService {
  private readonly presets: Preset[] = initialPresets;
  async create(preset: Preset) {
    this.presets.push(preset);
  }
  async findAll(): Promise<Preset[]> {
    return this.presets;
  }
}
