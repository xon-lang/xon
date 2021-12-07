import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../type-metadata';
import { IdTypeMetadata } from '../id-type-metadata';

export class AnyTypeMetadata extends IdTypeMetadata {
  constructor(public scope: DeclarationScope) {
    super('Any', [], scope);
  }

  is(other: TypeMetadata): boolean {
    return other instanceof AnyTypeMetadata;
  }
}
