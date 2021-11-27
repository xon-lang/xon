import { TupleTypeTree } from '../../../tree/type/tuple-type/tuple-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class TupleTypeMetadata extends TypeMetadata {
  constructor(
    public itemsTypes: TypeMetadata[],
    public declaration: ClassDeclarationMetadata,
    public scope: DeclarationScope,
  ) {
    super();
  }

  static fromTree(tree: TupleTypeTree, scope: DeclarationScope) {
    const itemsTypes = tree.itemsTypes.map((x) => getTypeMetadata(x, scope));
    const declaration = scope.get(tree.name) as ClassDeclarationMetadata;
    const metadata = new TupleTypeMetadata(itemsTypes, declaration, scope);
    return metadata;
  }
}
