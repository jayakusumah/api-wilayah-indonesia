import { Factory, Seeder,  } from 'typeorm-seeding';
import { Connection } from 'typeorm'
import { Province } from '../../modules/provinces/province.entity';
import { District } from '../../modules/districts/district.entity';
import { Regency } from '../../modules/regencies/regency.entity';
import { titleCase } from '../../utils';
import * as csv from 'csvtojson/v2'
import { join } from 'path';


export default class CreateData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const fileProvinces = join(__dirname, '../../../csv/provinces.csv');

    const provinces = await (await csv().fromFile(fileProvinces)).map(({ id, name }) => {
      return { id, name: titleCase(name) }
    })
    
    await connection
      .createQueryBuilder()
      .insert()
      .into(Province)
      .values(provinces)
      .execute()

    const fileRegencies = join(__dirname, '../../../csv/regencies.csv');
    const regencies = await (await csv().fromFile(fileRegencies)).map(({ id, name, provinceId }) => {
      return { id, name: titleCase(name), provinceId }
    })
    
    await connection
      .createQueryBuilder()
      .insert()
      .into(Regency)
      .values(regencies)
      .execute()

    const fileDistrict = join(__dirname, '../../../csv/districts.csv');
    const districts = await (await csv().fromFile(fileDistrict)).map(({ id, name, regencyId }) => {
      return { id, name: titleCase(name), regencyId }
    })

    await connection
      .createQueryBuilder()
      .insert()
      .into(District)
      .values(districts)
      .execute()
  }
}

