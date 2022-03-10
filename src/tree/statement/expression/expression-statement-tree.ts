import { ExpressionStatementContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { SourceRange } from '../../../util/source-range';
import { StatementTree } from '../statement-tree';

export class ExpressionStatementTree implements StatementTree {
  sourceRange: SourceRange;
  expression: ExpressionTree;

  constructor(ctx: ExpressionStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return this.expression.toString();
  }
}
