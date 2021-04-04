import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { getTypeDefinition } from '../../type/get-lib-type.util';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  public object: ExpressionTree;

  public name: string;

  public constructor(public ctx: MemberExpressionContext) {
    super();
    this.object = getExpressionTree(ctx.expression());
    this.name = ctx.id().text;
  }

  public getType(): TypeTree {
    const member = getTypeDefinition(this.object.getType()).body().find(
      (x) => x.name === this.name,
    );
    if (member) return member.getType();

    throw new Error(`${this} is not implemented`);
  }
}
