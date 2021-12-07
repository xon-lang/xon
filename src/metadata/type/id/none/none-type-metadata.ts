import { DeclarationScope } from '../../../declaration-scope';
import { AnyTypeMetadata } from '../any/any-type-metadata';
import { IdTypeMetadata } from '../id-type-metadata';
import { TypeMetadata } from '../../type-metadata';

export class NoneTypeMetadata extends IdTypeMetadata {
  constructor(public scope: DeclarationScope) {
    super('None', [], scope);
  }

  is(other: TypeMetadata): boolean {
    return other instanceof NoneTypeMetadata || other instanceof AnyTypeMetadata;
  }
}
