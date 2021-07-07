import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';

@Module({
  imports: [
    ConfigModule.resolveRootPath(process.cwd()).load('config/**/!(*.d).{ts,js}'),
  ],
})
export class Bootstrap {}