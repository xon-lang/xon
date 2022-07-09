// this code was generated

import { GenericsExpressionContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree, getExpressionTrees } from '../expression-tree-helper';

export class GenericsExpressionTree extends ExpressionTree {
  ctx: GenericsExpressionContext;
  sourceRange: SourceRange;
  expression: ExpressionTree;
  generics: ExpressionTree[] = [];

  constructor(ctx: GenericsExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.generics = getExpressionTrees(ctx.genericArguments()?.expression());
    this.addChildren(this.expression, ...this.generics);
  }
}

// this code was generated
