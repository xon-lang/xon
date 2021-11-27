import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class ArrayTypeMetadata extends TypeMetadata {
  declaration: ClassDeclarationMetadata;

  constructor(public itemType: TypeMetadata, public scope: DeclarationScope) {
    super();
    this.declaration = scope.get('Array') as ClassDeclarationMetadata;
  }

  equals(other: TypeMetadata): boolean {
    if (!(other instanceof ArrayTypeMetadata)) return false;
    return this.itemType.equals(other);
  }

  static fromTree(tree: ArrayTypeTree, scope: DeclarationScope) {
    const itemType = getTypeMetadata(tree.itemType, scope);
    const metadata = new ArrayTypeMetadata(itemType, scope);
    return metadata;
  }
}
