import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementTree } from '../statement-tree';

export class AssignmentStatementTree implements StatementTree {
  sourceReference: SourceReference;
  id: IdTree;
  value: ExpressionTree;

  constructor(ctx: AssignmentStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = getIdTree(ctx.id());
    this.value = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return `${this.id} = ${this.value}`;
  }
}
