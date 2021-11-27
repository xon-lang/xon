import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class ArrayTypeMetadata extends TypeMetadata {
  name: string;
  declaration: ClassDeclarationMetadata;
  itemType: TypeMetadata;
  size?: number;

  constructor(tree?: ArrayTypeTree, scope?: DeclarationScope) {
    super();
    if (!tree) return;

    this.name = tree.name;
    this.declaration = scope.get(this.name) as ClassDeclarationMetadata;
    this.itemType = getTypeMetadata(tree.itemType, scope);
  }

  static fromParams(
    name: string,
    declaration: ClassDeclarationMetadata,
    itemType: TypeMetadata,
    size?: number,
  ): ArrayTypeMetadata {
    const metadata = new ArrayTypeMetadata();
    metadata.name = name;
    metadata.declaration = declaration;
    metadata.itemType = itemType;
    metadata.size = size;
    return metadata;
  }
}
