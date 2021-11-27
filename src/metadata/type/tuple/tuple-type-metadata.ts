import { TupleTypeTree } from '../../../tree/type/tuple-type/tuple-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class TupleTypeMetadata extends TypeMetadata {
  name: string;
  declaration: ClassDeclarationMetadata;
  itemsTypes: TypeMetadata[];

  constructor(tree?: TupleTypeTree, scope?: DeclarationScope) {
    super();
    if (!tree) return;

    this.name = tree.name;
    this.declaration = scope.get(this.name) as ClassDeclarationMetadata;
    this.itemsTypes = tree.itemsTypes.map((x) => getTypeMetadata(x, scope));
  }
}
