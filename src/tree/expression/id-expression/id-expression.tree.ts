import { IdExpressionContext } from '../../../grammar/xon-parser';
import { NamingService } from '../../../naming-service/naming-service';
import { DefinitionTree } from '../../definition/definition.tree';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  public name: string;

  public constructor(public ctx: IdExpressionContext) {
    super();
    this.name = ctx.ID().text;
  }

  public getType(): TypeTree {
    if (this.name[0].toUpperCase() === this.name[0])
      return (NamingService.instance.find(this.name).tree as DefinitionTree).getType();

    return NamingService.instance.find(this.name).type;
  }
}
