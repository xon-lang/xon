import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class-definition-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class ArrayTypeMetadata extends TypeMetadata {
  declaration: ClassDefinitionDeclarationMetadata;

  constructor(public itemType: TypeMetadata, public scope: DeclarationScope) {
    super();
    this.declaration = scope.get('Array') as ClassDefinitionDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) return other.has(this);
    if (!(other instanceof ArrayTypeMetadata)) return false;
    return this.itemType.is(other.itemType);
  }

  static fromTree(tree: ArrayTypeTree, scope: DeclarationScope) {
    const itemType = getTypeMetadata(tree.itemType, scope);
    const metadata = new ArrayTypeMetadata(itemType, scope);
    return metadata;
  }
}
