import { LiteralTypeContext } from '../../../grammar/xon-parser';
import { getLiteralTree } from '../../literal/literal-helper';
import { LiteralTree } from '../../literal/literal.tree';
import { TypeTree } from '../type.tree';

export class LiteralTypeTree extends TypeTree {
  public literal: LiteralTree;

  public constructor(public ctx?: LiteralTypeContext) {
    super();
    if (!ctx) return;

    this.literal = getLiteralTree(ctx.literal());
  }
}
