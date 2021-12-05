import { ArrayTypeTree } from '../../../tree/type/array/array-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionMetadata } from '../../declaration/definition/class/class-definition-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class ArrayTypeMetadata extends TypeMetadata {
  declaration: ClassDefinitionMetadata;

  constructor(public itemType: TypeMetadata, public scope: DeclarationScope) {
    super();
    this.declaration = scope.get(
      this.constructor.name.replace('TypeMetadata', ''),
    ) as ClassDefinitionMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) return other.has(this);
    if (other instanceof ArrayTypeMetadata) return this.itemType.is(other.itemType);
    return false;
  }

  type(typeArguments: TypeMetadata[]): TypeMetadata {
    throw new Error('Method not implemented.');
  }

  static fromTree(tree: ArrayTypeTree, scope: DeclarationScope): ArrayTypeMetadata {
    const itemType = getTypeMetadata(tree.itemType, scope);
    const metadata = new ArrayTypeMetadata(itemType, scope);
    return metadata;
  }
}
