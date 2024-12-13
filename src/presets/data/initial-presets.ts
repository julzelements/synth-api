import { Preset } from '../interfaces/preset.interface';

export const initialPresets: Preset[] = [
  { name: 'default', filterResonance: 0, filterCutoff: 255 },
  { name: 'acid bass', filterResonance: 50, filterCutoff: 25 },
];
