import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { PresetsService } from './presets.service';
import { Test } from '@nestjs/testing';
import { PresetsModule } from './presets.module';
import { initialPresets } from './data/initial-presets';

describe('Preset', () => {
  let app: INestApplication;
  let presetsService: PresetsService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PresetsModule],
    })
      .overrideProvider(PresetsService)
      .useValue(presetsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });
  it('/GET /presets', () => {
    return request(app.getHttpServer())
      .get('/presets')
      .expect(200)
      .expect(initialPresets);
  });
  afterAll(async () => {
    await app.close();
  });
});
