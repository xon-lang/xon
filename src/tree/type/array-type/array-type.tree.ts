import { ArrayTypeContext } from '../../../grammar/xon-parser';
import { ArrayTypeMetadata } from '../../../metadata/type/array/array-type-metadata';
import { FunctionTypeTree } from '../function-type/function-type.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';
import { UnionTypeTree } from '../union-type/union-type.tree';

export class ArrayTypeTree extends TypeTree {
  metadata: ArrayTypeMetadata;
  name: string;
  itemType: TypeTree;

  constructor(public ctx?: ArrayTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.itemType = getTypeTree(ctx.type());
  }

  toString(): string {
    if (this.itemType instanceof FunctionTypeTree || this.itemType instanceof UnionTypeTree) {
      return `(${this.itemType})[]`;
    }
    return `${this.itemType}[]`;
  }
}
