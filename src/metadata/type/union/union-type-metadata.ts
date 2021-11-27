import { UnionTypeTree } from '../../../tree/type/union-type/union-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class UnionTypeMetadata extends TypeMetadata {
  declaration: ClassDeclarationMetadata;

  constructor(public types: TypeMetadata[], public scope: DeclarationScope) {
    super();
    this.declaration = scope.get('Union') as ClassDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (!(other instanceof UnionTypeMetadata)) return false;
    return this.types.every((x) => other.types.some((z) => x.is(z)));
  }

  has(other: TypeMetadata): boolean {
    return this.types.some((x) => other.is(x));
  }

  static fromTree(tree: UnionTypeTree, scope: DeclarationScope) {
    const types = tree.types.map((x) => getTypeMetadata(x, scope));
    const metadata = new UnionTypeMetadata(types, scope);
    return metadata;
  }
}
