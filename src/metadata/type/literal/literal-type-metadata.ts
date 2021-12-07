import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  ancestor: TypeMetadata;

  constructor(
    public name: string,
    public value: number | string | RegExp,
    scope: DeclarationScope,
  ) {
    super();

    this.ancestor = scope.get(name).type;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof LiteralTypeMetadata)
      return this.name === other.name && this.value === other.value;
    return this.ancestor.is(other);
  }
}
