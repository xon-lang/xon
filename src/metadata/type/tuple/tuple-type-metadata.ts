import { TupleTypeTree } from '../../../tree/type/tuple/tuple-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class/class-definition-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class TupleTypeMetadata extends TypeMetadata {
  declaration: ClassDefinitionDeclarationMetadata;

  constructor(public itemsTypes: TypeMetadata[], public scope: DeclarationScope) {
    super();
    this.declaration = scope.get(
      this.constructor.name.replace('TypeMetadata', ''),
    ) as ClassDefinitionDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) return other.has(this);
    if (!(other instanceof TupleTypeMetadata)) return false;
    return (
      this.itemsTypes.length === other.itemsTypes.length &&
      this.itemsTypes.every((x, i) => x.is(other.itemsTypes[i]))
    );
  }

  static fromTree(tree: TupleTypeTree, scope: DeclarationScope) {
    const itemsTypes = tree.itemsTypes.map((x) => getTypeMetadata(x, scope));
    const metadata = new TupleTypeMetadata(itemsTypes, scope);
    return metadata;
  }
}
