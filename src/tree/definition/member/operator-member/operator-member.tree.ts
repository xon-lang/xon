import { OperatorMemberContext } from '../../../../grammar/xon-parser';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class OperatorMemberTree extends MemberTree {
  public name: string;

  public parameters: ParameterTree[];

  public returnType: TypeTree;

  public statements: StatementTree[];

  public constructor(public ctx: OperatorMemberContext) {
    super();

    this.name = ctx.operator().text;
    this.parameters = ctx.parameter().map((x) => new ParameterTree(x));
    this.returnType = ctx.type() && getTypeTree(ctx.type());
    this.statements = ctx.body() && getStatementsTrees(ctx.body());
  }
}
