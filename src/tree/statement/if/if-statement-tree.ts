import { IfStatementContext } from '../../../grammar/xon-parser';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree-helper';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementTree } from '../statement-tree';

export class IfStatementTree implements StatementTree {
  sourceReference: SourceReference;
  condition: ExpressionTree;
  thenBody: BodyTree;
  elseBody?: BodyTree;

  constructor(ctx: IfStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.condition = getExpressionTree(ctx.expr());
    this.thenBody = getBodyTree(ctx._thenBody);
    this.elseBody = getBodyTree(ctx._elseBody);
  }

  toString(): string {
    return `if ${this.condition}:\n${this.thenBody}${
      this.elseBody ? '\nelse:\n' + this.elseBody : ''
    }`;
  }
}
