import { IdExpressionContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  public name: string;

  public constructor(public ctx: IdExpressionContext) {
    super();
    this.name = ctx.ID().text;
  }

  public getType(): TypeTree {
    return this.identifierStorage.find(this.name).type.setMetaName(this);
  }
}
