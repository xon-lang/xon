import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { NamingService } from '../../../naming-service/naming-service';
import { ParameterTree } from '../../parameter/parameter.tree';
import { createFunctionType } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public parameters: ParameterTree[];

  public body: ExpressionTree;

  public constructor(public ctx: LambdaExpressionContext) {
    super();
    NamingService.instance.pushScope();
    this.parameters = ctx.parameter().map((x) => new ParameterTree(x));
    this.parameters.forEach((x) => NamingService.instance.addParameter(x));
    this.body = getExpressionTree(ctx.expression());
    NamingService.instance.popScope();
  }

  public getType(): TypeTree {
    return createFunctionType(this.parameters, this.body.getType());
  }
}
