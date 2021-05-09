import { IdAssignmentStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { StatementTree } from '../statement.tree';

export class IdAssignmentStatementTree extends StatementTree {
  public name: string;

  public type?: TypeTree;

  public value: ExpressionTree;

  public constructor(public ctx?: IdAssignmentStatementContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.type = getTypeTree(ctx.type());
    this.value = getExpressionTree(ctx.expression());
  }
}
