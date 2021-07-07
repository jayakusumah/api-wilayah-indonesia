import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Regency } from './regency.entity';

@Injectable()
export class RegencyService extends TypeOrmCrudService<Regency> {
  constructor(@InjectRepository(Regency) repo) {
    super(repo);
  }
}