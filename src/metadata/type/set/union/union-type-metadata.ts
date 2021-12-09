import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../type-metadata';
import { SetTypeMetadata } from '../set-type-metadata';

export class UnionTypeMetadata extends SetTypeMetadata {
  constructor(public types: TypeMetadata[], public scope: DeclarationScope) {
    super();
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) {
      return this.types.every((x) => other.has(x));
    }
    return false;
  }

  has(other: TypeMetadata): boolean {
    return this.types.some((x) => other.is(x));
  }

  toString() {
    return this.types.join(' || ');
  }
}
