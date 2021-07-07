import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
} from '@nestjsx/crud';

import { Regency } from './regency.entity';
import { RegencyService } from './regency.service';

@Crud({
  model: {
    type: Regency,
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
@Controller('regencies')
export class RegencyController implements CrudController<Regency> {
  constructor(public service: RegencyService) {}
}