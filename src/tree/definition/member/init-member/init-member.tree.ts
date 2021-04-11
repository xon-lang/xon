import { InitMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { MemberTree } from '../member.tree';

export class InitMemberTree extends MemberTree {
  public statements: StatementTree[];

  public constructor(public ctx?: InitMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.INIT().text;
    this.statements = getStatementsTrees(ctx.body());
  }
}
