import { ReturnStatementContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class ReturnStatementTree implements StatementTree {
  sourceRange: SourceRange;
  value?: ExpressionTree;

  constructor(ctx: ReturnStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.expr() && getExpressionTree(ctx.expr());
  }

  toString(): string {
    if (this.value) {
      return `return ${this.value}`;
    }
    return `return`;
  }
}
