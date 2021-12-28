import { ExpressionStatementContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { SourceReference } from '../../../util/source-reference';
import { StatementTree } from '../statement-tree';

export class ExpressionStatementTree implements StatementTree {
  sourceReference: SourceReference;
  expression: ExpressionTree;

  constructor(ctx: ExpressionStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return this.expression.toString();
  }
}
