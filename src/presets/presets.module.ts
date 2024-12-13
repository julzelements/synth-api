import { Module } from '@nestjs/common';
import { PresetsController } from './presets.controller';
import { PresetsService } from './presets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preset } from './entities/preset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Preset])],
  controllers: [PresetsController],
  providers: [PresetsService],
})
export class PresetsModule {}
