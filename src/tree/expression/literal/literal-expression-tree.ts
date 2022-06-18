// this code was generated

import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ValueMetadata } from '../../../metadata/value/value-metadata';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../../literal/literal-tree';
import { getLiteralTree } from '../../literal/literal-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class LiteralExpressionTree extends ExpressionTree {
  metadata: ValueMetadata;
  ctx: LiteralExpressionContext;
  sourceRange: SourceRange;
  literal: LiteralTree;

  constructor(ctx: LiteralExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.literal = ctx && getLiteralTree(ctx.literal());
    this.addChildren(this.literal)
  }

  toString(): String {
    return this.literal.sourceRange.rangeText;
  }
}

// this code was generated
