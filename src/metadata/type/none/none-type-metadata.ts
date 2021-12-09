import { DeclarationScope } from '../../declaration-scope';
import { IdTypeMetadata } from '../id/id-type-metadata';

export class NoneTypeMetadata extends IdTypeMetadata {
  constructor(public scope: DeclarationScope) {
    super('None', [], scope);
  }
}
