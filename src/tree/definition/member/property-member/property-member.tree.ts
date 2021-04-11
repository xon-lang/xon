import { PropertyMemberContext } from '../../../../grammar/xon-parser';
import { getExpressionTree } from '../../../expression/expression-helper';
import { ExpressionTree } from '../../../expression/expression.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class PropertyMemberTree extends MemberTree {
  public name: string;

  public typeTree?: TypeTree;

  public value?: ExpressionTree;

  public constructor(public ctx?: PropertyMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.typeTree = getTypeTree(ctx.type());
    this.value = getExpressionTree(ctx.expression());
  }
}
