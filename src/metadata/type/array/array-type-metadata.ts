import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class ArrayTypeMetadata extends TypeMetadata {
  constructor(
    public itemType: TypeMetadata,
    public declaration: ClassDeclarationMetadata,
    public scope: DeclarationScope,
  ) {
    super();
  }

  static fromTree(tree: ArrayTypeTree, scope: DeclarationScope) {
    const itemType = getTypeMetadata(tree.itemType, scope);
    const declaration = scope.get(tree.name) as ClassDeclarationMetadata;
    const metadata = new ArrayTypeMetadata(itemType, declaration, scope);
    return metadata;
  }
}
