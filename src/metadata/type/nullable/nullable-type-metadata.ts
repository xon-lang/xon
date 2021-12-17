import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class NullableTypeMetadata extends IdTypeMetadata {
  constructor(public innerType: TypeMetadata) {
    super('Nullable', [innerType]);
  }
}
