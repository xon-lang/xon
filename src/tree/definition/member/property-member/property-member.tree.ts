import { PropertyMemberContext } from '../../../../grammar/xon-parser';
import { getExpressionTree } from '../../../expression/expression-tree.helper';
import { ExpressionTree } from '../../../expression/expression.tree';
import { getTypeTree } from '../../../type/type-tree.helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class PropertyMemberTree extends MemberTree {
  public isPrivate: boolean;
  public type: TypeTree;
  public value?: ExpressionTree;

  public constructor(public ctx?: PropertyMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.isPrivate = this.name.startsWith('_');
    this.type = getTypeTree(ctx.type());
    this.value = getExpressionTree(ctx.expression());
  }
}
