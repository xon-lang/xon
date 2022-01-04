import { WhileStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree-helper';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class WhileStatementTree implements StatementTree {
  sourceReference: SourceReference;
  expression: ExpressionTree;
  body: BodyTree;

  constructor(ctx: WhileStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expr());
    this.body = getBodyTree(ctx.body());
  }

  toString(): string {
    return `while ${this.expression}${this.body}`;
  }
}
