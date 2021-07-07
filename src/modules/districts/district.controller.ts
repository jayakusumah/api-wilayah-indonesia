import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
} from '@nestjsx/crud';

import { District } from './district.entity';
import { DistrictService } from './district.service';

@Crud({
  model: {
    type: District,
  },
  routes: {
    only: ['getManyBase'],
  },
  query: {
    maxLimit: 100,
    alwaysPaginate: true,
    join: {
      province: {}
    },
  },
})
@Controller('districts')
export class DistrictController implements CrudController<District> {
  constructor(public service: DistrictService) {}
}