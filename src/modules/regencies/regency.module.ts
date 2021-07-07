import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Regency } from './regency.entity';
import { RegencyService } from './regency.service';
import { RegencyController } from './regency.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Regency])],
  controllers: [RegencyController],
  providers: [RegencyService],
  exports: [RegencyService],
})
export class RegencyModule {}