// this code was generated

import { NullableExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class NullableExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata;
  ctx: NullableExpressionContext;
  sourceRange: SourceRange;
  value: ExpressionTree;

  constructor(ctx: NullableExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = getExpressionTree(ctx.expression());
  }

  toString(): String {
    return this.value.toString() + '?';
  }
}

// this code was generated
