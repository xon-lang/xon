import { DeclarationScope } from '../../declaration-scope';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { SetTypeMetadata } from '../set/set-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  public declaration: DefinitionMetadata;

  constructor(
    public name: string,
    public typeArguments: TypeMetadata[],
    public scope: DeclarationScope,
  ) {
    super();

    this.declaration = scope.get(name) as DefinitionMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof SetTypeMetadata) return other.has(this);
    if (other instanceof IdTypeMetadata) {
      if (this.typeArguments.length !== other.typeArguments.length) return false;
      if (this.declaration !== other.declaration && !this.declaration.ancestor) return false;
      if (!this.declaration.ancestor.is(other)) return false;

      return this.typeArguments.every((x, i) => x.is(other.typeArguments[i]));
    }
    return false;
  }
}
