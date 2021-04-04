import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { getLiteralTree } from '../../literal/literal-helper';
import { LiteralTree } from '../../literal/literal.tree';
import { PlainTypeTree } from '../../type/plain-type/plain-type.tree';
import { createPlainType } from '../../type/type-helper';
import { ExpressionTree } from '../expression.tree';

export class LiteralExpressionTree extends ExpressionTree {
  public literal: LiteralTree;

  public constructor(public ctx?: LiteralExpressionContext) {
    super();
    this.literal = ctx && getLiteralTree(ctx.literal());
  }

  public getType(): PlainTypeTree {
    return createPlainType(this.literal.constructor.name.replace(/LiteralTree/, ''));
  }
}
