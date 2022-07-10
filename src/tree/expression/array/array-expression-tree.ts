// this code was generated

import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { ArgumentTree } from '../../argument/argument-tree';
import { getArgumentTrees } from '../../argument/argument-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class ArrayExpressionTree extends ExpressionTree {
  ctx: ArrayExpressionContext;
  sourceRange: SourceRange;
  arguments: ArgumentTree[];

  constructor(ctx: ArrayExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.arguments = getArgumentTrees(ctx.arguments().argument());
    this.addChildren(...this.arguments);
  }
}

// this code was generated
