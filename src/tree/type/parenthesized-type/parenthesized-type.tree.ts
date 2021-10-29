import { ParenthesizedTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class ParenthesizedTypeTree extends TypeTree {
  name: string;
  innerType: TypeTree;

  constructor(public ctx?: ParenthesizedTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.innerType = getTypeTree(ctx.type());
  }

  toString(): string {
    return `(${this.innerType})`;
  }
}
