import { AssertStatementContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class AssertStatementTree implements StatementTree {
  sourceRange: SourceRange;
  actual: ExpressionTree;
  expect: ExpressionTree;

  constructor(ctx: AssertStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.actual = getExpressionTree(ctx.expr(0));
    this.expect = getExpressionTree(ctx.expr(1));
  }

  toString(): string {
    return `actual: ${this.actual}\nexpect: ${this.expect}`;
  }
}
