import { LiteralTypeContext } from '../../../grammar/xon-parser';
import { getLiteralTree } from '../../literal/literal-tree.helper';
import { LiteralTree } from '../../literal/literal.tree';
import { TypeTree } from '../type.tree';

export class LiteralTypeTree extends TypeTree {
  name: string;
  literal: LiteralTree;

  constructor(public ctx?: LiteralTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.literal = getLiteralTree(ctx.literal());
  }

  toString(): string {
    if (typeof this.literal.value === 'string') return `"${this.literal.value}"`;
    return `${this.literal.value}`;
  }
}
