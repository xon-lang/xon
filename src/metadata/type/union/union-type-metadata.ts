import { UnionTypeTree } from '../../../tree/type/union/union-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class/class-definition-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class UnionTypeMetadata extends TypeMetadata {
  declaration: ClassDefinitionDeclarationMetadata;

  constructor(public types: TypeMetadata[], public scope: DeclarationScope) {
    super();
    this.declaration = scope.get(
      this.constructor.name.replace('TypeMetadata', ''),
    ) as ClassDefinitionDeclarationMetadata;
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
