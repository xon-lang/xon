import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  public declaration: ClassDeclarationMetadata;

  constructor(
    public name: string,
    public typeArguments: TypeMetadata[],
    public scope: DeclarationScope,
  ) {
    super();
    this.declaration = scope.get(name) as ClassDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) return other.has(this);
    if (!(other instanceof IdTypeMetadata)) return false;
    return (
      this.declaration === other.declaration ||
      (this.declaration.baseType() && this.declaration.baseType().is(other))
    );
  }

  static fromTree(tree: IdTypeTree, scope: DeclarationScope) {
    const typeArguments = tree.typeArguments.map((x) => getTypeMetadata(tree, scope));
    const metadata = new IdTypeMetadata(tree.id.text, typeArguments, scope);
    return metadata;
  }
}
