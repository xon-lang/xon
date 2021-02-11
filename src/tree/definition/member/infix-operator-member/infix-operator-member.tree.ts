import { InfixOperatorMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class InfixOperatorMemberTree extends MemberTree {
  public operator: string;

  public arg: {
    name: string;
    type: TypeTree;
  };

  public returnType: TypeTree;

  public statements: StatementTree[];

  public constructor(public ctx: InfixOperatorMemberContext) {
    super();

    this.operator = ctx.operator().text;
    this.arg = {
      name: ctx.argument().ID().text,
      type: new TypeTree(ctx.argument().type()),
    };

    this.returnType = ctx.type() && new TypeTree(ctx.type());
    this.statements = ctx.body() && getStatementsTrees(ctx.body());
  }
}
