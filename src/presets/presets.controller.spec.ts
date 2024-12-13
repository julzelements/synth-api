import { PresetsController } from './presets.controller';
import { PresetsService } from './presets.service';
import { Test } from '@nestjs/testing';
import { Preset } from './interfaces/preset.interface';

describe('PresetController', () => {
  let presetController: PresetsController;
  let presetsService: PresetsService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PresetsController],
      providers: [PresetsService],
    }).compile();
    presetController = moduleRef.get(PresetsController);
    presetsService = moduleRef.get(PresetsService);
  });
  describe('findAll', () => {
    it('should return all presets', async () => {
      const result: Preset[] = [
        {
          name: 'buzzfilter',
          filterCutoff: 12,
          filterResonance: 30,
        },
      ];
      jest.spyOn(presetsService, 'findAll').mockImplementationOnce(() => {
        return Promise.resolve(result);
      });
      const results = await presetController.findAll();
      expect(results).toEqual(result);
    });
  });
});
