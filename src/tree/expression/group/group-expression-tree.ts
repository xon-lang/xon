// this code was generated

import { GroupExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { Metadata } from '../../../metadata/metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class GroupExpressionTree extends ExpressionTree {
  metadata: Metadata;
  ctx: GroupExpressionContext;
  sourceRange: SourceRange;
  expression: ExpressionTree;

  constructor(ctx: GroupExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
  }

  toString(): String {
    return `(${this.expression})`;
  }
}

// this code was generated
