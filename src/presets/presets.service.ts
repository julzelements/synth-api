import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preset } from './entities/preset.entity';
import { CreatePresetDto } from './dto/create-preset.dto';
import { UpdatePresetDto } from './dto/update-preset.dto';

@Injectable()
export class PresetsService {
  constructor(
    @InjectRepository(Preset) private presetRepository: Repository<Preset>,
  ) {}

  async create(createPresetDto: CreatePresetDto): Promise<Preset> {
    const preset = new Preset();
    preset.name = createPresetDto.name;
    preset.filterCutoff = createPresetDto.filterCutoff;
    preset.filterResonance = createPresetDto.filterResonance;
    return await this.presetRepository.save(preset);
  }

  async findAll(): Promise<Preset[]> {
    return await this.presetRepository.find();
  }

  async findOne(id: number): Promise<Preset> {
    return await this.presetRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePresetDto: UpdatePresetDto): Promise<Preset> {
    const preset = await this.presetRepository.findOne({ where: { id } });
    if (!preset) {
      throw new NotFoundException('Preset not found');
    }
    await this.presetRepository.update({ id }, updatePresetDto);
    return preset;
  }

  async remove(id: number): Promise<void> {
    await this.presetRepository.delete(id);
  }
}
