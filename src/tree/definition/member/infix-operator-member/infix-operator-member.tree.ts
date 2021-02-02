import { InfixOperatorMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTree } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class InfixOperatorMemberTree extends MemberTree {
  name: string;

  arg: {
    name: string;
    type: TypeTree;
  };

  returnType: TypeTree;

  statements: StatementTree[];

  constructor(public ctx: InfixOperatorMemberContext) {
    super();

    this.name = 'infix +';
    this.arg = {
      name: ctx.argument().ID().text,
      type: new TypeTree(ctx.argument().type()),
    };

    this.returnType = new TypeTree(ctx.type());
    this.statements = getStatementsTree(ctx.body());
  }
}
