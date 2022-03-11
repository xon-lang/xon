import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { LiteralExpressionMetadata } from '../../../metadata/expression/literal/literal-expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../../literal/literal-tree';
import { getLiteralTree } from '../../literal/literal-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class LiteralExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: LiteralExpressionMetadata;
  literal: LiteralTree;

  constructor(ctx: LiteralExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.literal = ctx && getLiteralTree(ctx.literal());
  }

  toString(): String {
    return this.literal.sourceRange.rangeText;
  }
}
