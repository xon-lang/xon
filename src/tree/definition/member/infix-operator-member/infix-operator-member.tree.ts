import { InfixOperatorMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTree } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class InfixOperatorMemberTree extends MemberTree {
  operator: string;

  arg: {
    name: string;
    type: TypeTree;
  };

  returnType: TypeTree;

  statements: StatementTree[];

  constructor(public ctx: InfixOperatorMemberContext) {
    super();

    this.operator = ctx.operator().text;
    this.arg = {
      name: ctx.argument().ID().text,
      type: new TypeTree(ctx.argument().type()),
    };

    this.returnType = ctx.type() && new TypeTree(ctx.type());
    this.statements = ctx.body() && getStatementsTree(ctx.body());
  }
}
