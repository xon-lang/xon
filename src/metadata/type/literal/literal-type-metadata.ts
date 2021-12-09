import { DeclarationScope } from '../../declaration-scope';
import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends IdTypeMetadata {
  constructor(
    public name: string,
    public value: number | string | RegExp,
    scope: DeclarationScope,
  ) {
    super(name, [], scope);
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof LiteralTypeMetadata)
      return this.name === other.name && this.value === other.value;
    return super.is(other);
  }

  toString() {
    return `${this.name}<${this.value}>`;
  }
}
