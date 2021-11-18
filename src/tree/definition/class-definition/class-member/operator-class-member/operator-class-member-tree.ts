import { OperatorClassMemberContext } from '../../../../../grammar/xon-parser';
import { IdToken } from '../../../../id-token';
import { getExpressionParametersTrees } from '../../../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../../../expression-parameter/expression-parameter.tree';
import { getTypeTree } from '../../../../type/type-tree.helper';
import { TypeTree } from '../../../../type/type.tree';
import { ClassMemberTree } from '../class-member.tree';

export class OperatorClassMemberTree extends ClassMemberTree {
  id: IdToken;
  parameters: ExpressionParameterTree[];
  returnType: TypeTree;

  constructor(public ctx?: OperatorClassMemberContext) {
    super();
    if (!ctx) return;

    if (!ctx.type()) throw new Error('Operator must have return type');

    this.id = IdToken.fromContext(ctx.operator());
    this.parameters = getExpressionParametersTrees(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
  }
}
