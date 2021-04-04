import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { NamingService } from '../../../naming-service/naming-service';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class AssignmentStatementTree extends StatementTree {
  public name: string;

  public value: ExpressionTree;

  public constructor(public ctx?: AssignmentStatementContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.value = getExpressionTree(ctx.expression());

    NamingService.instance.addAssignment(this);
  }
}
