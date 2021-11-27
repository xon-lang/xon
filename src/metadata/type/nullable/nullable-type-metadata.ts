import { NullableTypeTree } from '../../../tree/type/nullable-type/nullable-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class NullableTypeMetadata extends TypeMetadata {
  public declaration: ClassDeclarationMetadata;

  constructor(public type: TypeMetadata, public scope: DeclarationScope) {
    super();
    this.declaration = type.declaration;
  }

  is(other: TypeMetadata): boolean {
    if (!(other instanceof NullableTypeMetadata)) return false;
    return this.type.is(other);
  }

  static fromTree(tree: NullableTypeTree, scope: DeclarationScope) {
    const type = getTypeMetadata(tree.baseType, scope);
    const metadata = new NullableTypeMetadata(type, scope);
    return metadata;
  }
}
