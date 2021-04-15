import { PropertyMemberContext } from '../../../../grammar/xon-parser';
import { getExpressionTree } from '../../../expression/expression-helper';
import { ExpressionTree } from '../../../expression/expression.tree';
import { getTypeTree } from '../../../type/type-helper';
import { MemberTree } from '../member.tree';

export class PropertyMemberTree extends MemberTree {
  public isPrivate: boolean;

  public value?: ExpressionTree;

  public constructor(public ctx?: PropertyMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.isPrivate = this.name.startsWith('_');
    this.returnType = getTypeTree(ctx.type());
    this.value = getExpressionTree(ctx.expression());
  }
}
