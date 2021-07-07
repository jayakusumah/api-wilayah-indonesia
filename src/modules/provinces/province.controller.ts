import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
} from '@nestjsx/crud';

import { Province } from './province.entity';
import { ProvinceService } from './province.service';

@Crud({
  model: {
    type: Province,
  },
  routes: {
    only: ['getManyBase'],
  },
  query: {
    maxLimit: 100,
    alwaysPaginate: true,
    join: {},
  },
})
@Controller('provinces')
export class ProvinceController implements CrudController<Province> {
  constructor(public service: ProvinceService) {}
}