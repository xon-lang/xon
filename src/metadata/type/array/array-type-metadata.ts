import { DeclarationScope } from '../../declaration-scope';
import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class ArrayTypeMetadata extends IdTypeMetadata {
  constructor(public itemType: TypeMetadata, public scope: DeclarationScope) {
    super('Array', [itemType], scope);
  }
}
