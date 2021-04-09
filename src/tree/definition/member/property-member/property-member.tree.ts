import { PropertyMemberContext } from '../../../../grammar/xon-parser';
import { getExpressionTree } from '../../../expression/expression-helper';
import { ExpressionTree } from '../../../expression/expression.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class PropertyMemberTree extends MemberTree {
  public name: string;

  public type?: TypeTree;

  public value?: ExpressionTree;

  public constructor(public ctx: PropertyMemberContext) {
    super();
    this.name = ctx.id().text;
    this.type = getTypeTree(ctx.type());
    this.value = getExpressionTree(ctx.expression());
  }
}
