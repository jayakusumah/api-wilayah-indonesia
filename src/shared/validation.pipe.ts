import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { mapValues, keyBy, values } from 'lodash'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('No data submitted');
    }

    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          error: 'Invalid request',
          errors: mapValues(mapValues(keyBy(errors, 'property'), 'constraints'), values),
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return value;
  }

  private buildError(errors) {
    const result = {};
    errors.forEach(el => {
      const prop = el.property;
      Object.entries(el.constraints).forEach(constraint => {
        result[prop + constraint[0]] = `${constraint[1]}`;
      });
    });
    console.log(result)
    return result;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}