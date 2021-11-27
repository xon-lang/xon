import { TupleTypeTree } from '../../../tree/type/tuple-type/tuple-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class TupleTypeMetadata extends TypeMetadata {
  declaration: ClassDeclarationMetadata;

  constructor(public itemsTypes: TypeMetadata[], public scope: DeclarationScope) {
    super();
    this.declaration = scope.get('Tuple') as ClassDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
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
