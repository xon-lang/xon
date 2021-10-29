import { IdToken } from '../../../tree/id-token';
import { TypeMetadata } from '../type-metadata';

export class NullableTypeMetadata extends TypeMetadata {
  innerType: TypeMetadata;

  constructor(public idToken: IdToken) {
    super();
  }
}
