import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { LiteralExpressionMetadata } from '../../../metadata/expression/literal/literal-expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../../literal/literal-tree';
import { getLiteralTree } from '../../literal/literal-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class LiteralExpressionTree implements ExpressionTree {
  sourceReference: SourceRange;
  metadata: LiteralExpressionMetadata;
  literal: LiteralTree;

  constructor(ctx: LiteralExpressionContext) {
    this.sourceReference = SourceRange.fromContext(ctx);
    this.literal = ctx && getLiteralTree(ctx.literal());
  }

  toString(): string {
    return this.literal.sourceReference.rangeText;
  }
}
