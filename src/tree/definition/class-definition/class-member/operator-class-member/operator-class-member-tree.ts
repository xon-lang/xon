import { OperatorClassMemberContext } from '../../../../../grammar/xon-parser';
import { IdToken } from '../../../../id-token';
import { getParametersTrees } from '../../../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../../../parameter/parameter.tree';
import { getTypeTree } from '../../../../type/type-tree.helper';
import { TypeTree } from '../../../../type/type.tree';
import { ClassMemberTree } from '../class-member.tree';

export class OperatorClassMemberTree extends ClassMemberTree {
  id: IdToken;
  parameters: ParameterTree[];
  returnType: TypeTree;

  constructor(public ctx?: OperatorClassMemberContext) {
    super();
    if (!ctx) return;

    if (!ctx.type()) throw new Error('Operator must have return type');

    this.id = IdToken.fromContext(ctx.operator());
    this.parameters = getParametersTrees(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
  }
}
