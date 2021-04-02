import { InstanceExpressionContext } from '../../../grammar/xon-parser';
import { NamingService } from '../../../naming-service/naming-service';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class InstanceExpressionTree extends ExpressionTree {
  public constructor(public ctx: InstanceExpressionContext) {
    super();
  }

  public getType(): TypeTree {
    return NamingService.instance.find(this.ctx.text).type;
  }
}
