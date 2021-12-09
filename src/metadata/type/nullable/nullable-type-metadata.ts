import { DeclarationScope } from '../../declaration-scope';
import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class NullableTypeMetadata extends IdTypeMetadata {
  constructor(public innerType: TypeMetadata, public scope: DeclarationScope) {
    super('Nullable', [innerType], scope);
  }
}
