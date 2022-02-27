import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class AssignmentStatementTree implements StatementTree {
  sourceReference: SourceReference;
  variable: ExpressionTree;
  value: ExpressionTree;

  constructor(ctx: AssignmentStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.variable = getExpressionTree(ctx.expr(0));
    this.value = getExpressionTree(ctx.expr(1));
  }

  toString(): string {
    return `${this.variable} = ${this.value}`;
  }
}
