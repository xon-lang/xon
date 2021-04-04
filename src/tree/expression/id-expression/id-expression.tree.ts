import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IssueService } from '../../../issue-service/issue-service';
import { NamingService } from '../../../naming-service/naming-service';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  public name: string;

  public constructor(public ctx: IdExpressionContext) {
    super();

    this.name = ctx.id().text;
  }

  public getType(): TypeTree {
    const nameItem = NamingService.instance.find(this.name);
    if (!nameItem)
      IssueService.instance.addError(
        this,
        `Type for "${this.name}" not defined`,
        'Set identifier type',
      );
    return nameItem.type;
  }
}
