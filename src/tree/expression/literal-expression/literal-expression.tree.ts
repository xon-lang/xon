import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { getLibType } from '../../../xon-lib/lib-type';
import { DefinitionTree } from '../../definition/definition.tree';
import { getLiteralTree } from '../../literal/literal-helper';
import { LiteralTree } from '../../literal/literal.tree';
import { ExpressionTree } from '../expression.tree';

export class LiteralExpressionTree extends ExpressionTree {
  literal: LiteralTree<unknown>;

  constructor(public ctx?: LiteralExpressionContext) {
    super();
    this.literal = ctx && getLiteralTree(ctx.literal());
  }

  getType(): DefinitionTree {
    return getLibType(this.literal.constructor.name.replace(/LiteralTree/, ''));
  }
}
