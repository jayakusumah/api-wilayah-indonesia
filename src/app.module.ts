import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Bootstrap } from './bootstrap';
import { ConfigService } from 'nestjs-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceModule } from './modules/provinces/province.module';
import { DistrictModule } from './modules/districts/district.module';
import { RegencyModule } from './modules/regencies/regency.module';
import { resolve } from 'path';


ConfigService.rootPath = resolve(__dirname);

@Module({
  imports: [
    Bootstrap,
    ProvinceModule,
    RegencyModule,
    DistrictModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => config.get('db'),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
