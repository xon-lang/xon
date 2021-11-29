import { NullableTypeContext } from '../../../grammar/xon-parser';
import { NullableTypeMetadata } from '../../../metadata/type/nullable/nullable-type-metadata';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class NullableTypeTree extends TypeTree {
  metadata: NullableTypeMetadata;
  name: string;
  baseType: TypeTree;

  constructor(public ctx?: NullableTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.baseType = getTypeTree(ctx.type());
  }

  toString(): string {
    return `${this.baseType}?`;
  }
}
