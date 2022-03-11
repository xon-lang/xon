import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class AssignmentStatementTree implements StatementTree {
  sourceRange: SourceRange;
  variable: ExpressionTree;
  value: ExpressionTree;

  constructor(ctx: AssignmentStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.variable = getExpressionTree(ctx.expr(0));
    this.value = getExpressionTree(ctx.expr(1));
  }

  toString(): String {
    return `${this.variable} = ${this.value}`;
  }
}
