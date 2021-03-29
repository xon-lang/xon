import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdService } from '../../../id-service/id-service';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  public name: string;

  public constructor(public ctx: IdExpressionContext) {
    super();
    this.name = ctx.ID().text;

    this.dataType = IdService.instance.find(this.name)?.type;
  }
}
