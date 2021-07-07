import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Province } from './province.entity';

@Injectable()
export class ProvinceService extends TypeOrmCrudService<Province> {
  constructor(@InjectRepository(Province) repo) {
    super(repo);
  }
}