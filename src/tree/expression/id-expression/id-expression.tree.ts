import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdService } from '../../../id-service/id-service';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  public name: string;

  public constructor(public ctx: IdExpressionContext) {
    super();
    this.name = ctx.ID().text;
  }

  public getType(): TypeTree {
    return IdService.instance.find(this.name).type.setMetaName(this);
  }
}
