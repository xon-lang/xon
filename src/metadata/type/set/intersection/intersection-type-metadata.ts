import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../type-metadata';
import { SetTypeMetadata } from '../set-type-metadata';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class IntersectionTypeMetadata extends SetTypeMetadata {
  constructor(public types: TypeMetadata[], public scope: DeclarationScope) {
    super();
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof IntersectionTypeMetadata) {
      return this.types.every((x) => other.has(x));
    }
    if (other instanceof UnionTypeMetadata) {
      return other.has(this);
    }
    return false;
  }

  has(other: TypeMetadata): boolean {
    return this.types.every((x) => other.is(x));
  }

  toString() {
    return this.types.join(' && ');
  }
}
