import { PropertyExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class PropertyExpressionTree extends ExpressionTree {
  public object: ExpressionTree;

  public name: string;

  public constructor(public ctx: PropertyExpressionContext) {
    super();
    this.object = getExpressionTree(ctx.expression());
    this.name = ctx.id().text;

    // this.dataType = getTypeDefinition( this.object.dataType).
  }
}
