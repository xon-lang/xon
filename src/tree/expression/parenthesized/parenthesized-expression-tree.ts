import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class ParenthesizedExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: ExpressionMetadata;
  expression: ExpressionTree;

  constructor(ctx: ParenthesizedExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return `(${this.expression})`;
  }
}
