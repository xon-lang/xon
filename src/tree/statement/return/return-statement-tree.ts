import { ReturnStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class ReturnStatementTree implements StatementTree {
  sourceReference: SourceReference;
  value?: ExpressionTree;

  constructor(ctx: ReturnStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.value = ctx.expr() && getExpressionTree(ctx.expr());
  }

  toString(): string {
    if (this.value) {
      return `return ${this.value}`;
    }
    return `return`;
  }
}
