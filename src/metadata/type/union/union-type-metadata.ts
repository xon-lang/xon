import { UnionTypeTree } from '../../../tree/type/union-type/union-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class UnionTypeMetadata extends TypeMetadata {
  declaration: ClassDeclarationMetadata;

  constructor(public types: TypeMetadata[], public scope: DeclarationScope) {
    super();
    this.declaration = scope.get(
      this.constructor.name.replace('TypeMetadata', ''),
    ) as ClassDeclarationMetadata;
  }

  static fromTree(tree: UnionTypeTree, scope: DeclarationScope) {
    const types = tree.types.map((x) => getTypeMetadata(x, scope));
    const metadata = new UnionTypeMetadata(types, scope);
    return metadata;
  }
}
