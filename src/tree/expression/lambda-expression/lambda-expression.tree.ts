import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { IdService } from '../../../id-service/id-service';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public parameters: ParameterTree[];

  public body: ExpressionTree;

  public constructor(public ctx: LambdaExpressionContext) {
    super();
    IdService.instance.pushScope();
    this.parameters = ctx.parameter().map((x) => new ParameterTree(x));
    this.parameters.forEach((x) => IdService.instance.addParameter(x));
    this.body = getExpressionTree(ctx.expression());
    IdService.instance.popScope();
  }
}
