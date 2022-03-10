import { WhileStatementContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree-helper';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class WhileStatementTree implements StatementTree {
  sourceRange: SourceRange;
  expression: ExpressionTree;
  body: BodyTree;

  constructor(ctx: WhileStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expr());
    this.body = getBodyTree(ctx.body());
  }

  toString(): string {
    return `while ${this.expression}${this.body}`;
  }
}
