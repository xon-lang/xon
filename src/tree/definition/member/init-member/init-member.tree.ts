import { InitMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class InitMemberTree extends MemberTree {
  public isAbstract: boolean;

  public args: {
    name: string;
    type: TypeTree;
  }[];

  public statements?: StatementTree[];

  public constructor(public ctx: InitMemberContext) {
    super();

    this.isAbstract = !ctx.body();
    this.args = ctx.argument().map((x) => ({
      name: x.ID().text,
      type: new TypeTree(x.type()),
    }));

    this.statements = ctx.body() && getStatementsTrees(ctx.body());
  }
}
