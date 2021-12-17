import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class ArrayTypeMetadata extends IdTypeMetadata {
  constructor(public itemType: TypeMetadata) {
    super('Array', [itemType]);
  }
}
