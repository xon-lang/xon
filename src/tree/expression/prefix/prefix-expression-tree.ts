// this code was generated

import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class PrefixExpressionTree extends ExpressionTree {
  ctx: PrefixExpressionContext;
  sourceRange: SourceRange;
  name: IdTree;
  value: ExpressionTree;

  constructor(ctx: PrefixExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._op);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.name, this.value);
  }
}

// this code was generated
