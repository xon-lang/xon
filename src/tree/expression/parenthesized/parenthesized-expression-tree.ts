import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class ParenthesizedExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  expression: ExpressionTree;

  constructor(ctx: ParenthesizedExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return `(${this.expression})`;
  }
}
