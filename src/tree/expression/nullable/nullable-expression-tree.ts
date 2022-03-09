import { NullableExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class NullableExpressionTree implements ExpressionTree {
  sourceReference: SourceRange;
  metadata: ExpressionMetadata;
  value: ExpressionTree;

  constructor(ctx: NullableExpressionContext) {
    this.sourceReference = SourceRange.fromContext(ctx);
    this.value = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return `${this.value}?`;
  }
}
