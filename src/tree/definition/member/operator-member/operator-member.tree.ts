import { OperatorMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class OperatorMemberTree extends MemberTree {
  public operator: string;

  public parameters: {
    name: string;
    type: TypeTree;
  }[];

  public returnType: TypeTree;

  public statements: StatementTree[];

  public constructor(public ctx: OperatorMemberContext) {
    super();

    this.operator = ctx
      .operator()
      .map((x) => x.text)
      .join('');
    this.parameters = ctx.parameter().map((x) => ({
      name: x.ID().text,
      type: new TypeTree(x.type()),
    }));

    this.returnType = ctx.type() && new TypeTree(ctx.type());
    this.statements = ctx.body() && getStatementsTrees(ctx.body());
  }
}
