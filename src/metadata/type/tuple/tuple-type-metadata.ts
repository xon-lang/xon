import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class TupleTypeMetadata extends IdTypeMetadata {
  constructor(public parameters: TypeMetadata[]) {
    super('Tuple', parameters);
  }
}
