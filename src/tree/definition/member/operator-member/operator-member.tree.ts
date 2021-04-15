import { OperatorMemberContext } from '../../../../grammar/xon-parser';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getBody } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { MemberTree } from '../member.tree';

export class OperatorMemberTree extends MemberTree {
  public body?: StatementTree[];

  public constructor(public ctx?: OperatorMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.operator().text;
    this.parameters = ParameterTree.fromContext(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
    this.body = getBody(ctx.body());
  }
}
