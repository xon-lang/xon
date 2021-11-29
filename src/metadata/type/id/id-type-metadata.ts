import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { DefinitionDeclarationMetadata } from '../../declaration/definition/definition-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  public declaration: DefinitionDeclarationMetadata;

  constructor(
    public name: string,
    public typeArguments: TypeMetadata[],
    public scope: DeclarationScope,
  ) {
    super();

    this.declaration = scope.get(name) as DefinitionDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) return other.has(this);
    if (other instanceof IdTypeMetadata)
      return (
        this.declaration === other.declaration ||
        (this.declaration.ancestor && this.declaration.ancestor.is(other))
      );
    return false;
  }

  static fromTree(tree: IdTypeTree, scope: DeclarationScope): IdTypeMetadata {
    const typeArguments = tree.typeArguments.map((x) => getTypeMetadata(tree, scope));
    const metadata = new IdTypeMetadata(tree.id.text, typeArguments, scope);
    return metadata;
  }
}
