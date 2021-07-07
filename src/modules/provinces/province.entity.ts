import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
} from 'typeorm';

import {
  IsString,
} from 'class-validator';

import { Regency } from '../regencies/regency.entity';

@Entity('provinces')
export class Province {
  @PrimaryColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  @OneToMany(() => Regency, regency => regency.province)
  regencies: Regency[];
}