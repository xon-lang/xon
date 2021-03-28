import { InitMemberContext } from '../../../../grammar/xon-parser';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { MemberTree } from '../member.tree';

export class InitMemberTree extends MemberTree {
  public isAbstract: boolean;

  public parameters: ParameterTree[];

  public statements?: StatementTree[];

  public constructor(public ctx: InitMemberContext) {
    super();

    this.isAbstract = !ctx.body();
    this.parameters = ctx.parameter().map((x) => new ParameterTree(x));
    this.statements = ctx.body() && getStatementsTrees(ctx.body());
  }
}
