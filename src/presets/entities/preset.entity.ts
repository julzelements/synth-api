import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  filterCutoff: number;

  @Column()
  filterResonance: number;
}
