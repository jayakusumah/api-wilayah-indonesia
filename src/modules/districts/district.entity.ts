import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import {
  IsString,
} from 'class-validator';

import { Regency } from '../regencies/regency.entity';

@Entity('districts')
export class District {
  @PrimaryColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  @ManyToOne(() => Regency, regency => regency.districts, { onDelete: 'CASCADE' })
  @JoinColumn()
  regency: Regency;

  @Column({ nullable: true })
  regencyId: number;
}