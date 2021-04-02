import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
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
    const member = findIndexMember(type, this.arguments);
    return member.returnType;
  }
}
