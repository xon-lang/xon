import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { FunctionTypeTree } from '../../type/function-type/function-type.tree';
import { findIndexMember } from '../../type/get-type.util';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  public object: ExpressionTree;

  public arguments: ArgumentTree[];

  public constructor(public ctx: IndexExpressionContext) {
    super();
    this.object = getExpressionTree(ctx.expression());
    this.arguments = ctx.argument().map((x) => new ArgumentTree(x));
  }

  public getType(): TypeTree {
    const type = this.object.getType();
    const indexMember = findIndexMember(type, this.arguments);
    return (indexMember.getType() as FunctionTypeTree).returnType;
  }
}
