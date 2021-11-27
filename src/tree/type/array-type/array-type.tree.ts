import { ArrayTypeContext } from '../../../grammar/xon-parser';
import { FunctionTypeTree } from '../function-type/function-type.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';
import { UnionTypeTree } from '../union-type/union-type.tree';

export class ArrayTypeTree extends TypeTree {
  name: string;
  itemType: TypeTree;
  size?: number;

  constructor(public ctx?: ArrayTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.itemType = getTypeTree(ctx.type());
    this.size = (ctx._size && +ctx._size.text) || null;
  }

  toString(): string {
    if (this.itemType instanceof FunctionTypeTree || this.itemType instanceof UnionTypeTree) {
      return `(${this.itemType})[${this.size || ''}]`;
    }
    return `${this.itemType}[${this.size || ''}]`;
  }
}
