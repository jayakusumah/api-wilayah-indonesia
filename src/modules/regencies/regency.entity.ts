import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import {
  IsString,
} from 'class-validator';

import { Province } from '../provinces/province.entity';
import { District } from '../districts/district.entity';

@Entity('regencies')
export class Regency {
  @PrimaryColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  @ManyToOne(() => Province, province => province.regencies, { onDelete: 'CASCADE' })
  @JoinColumn()
  province: Province;

  @Column({ nullable: true })
  provinceId: number;

  @OneToMany(() => District, district => district.regency)
  districts: District[];
}