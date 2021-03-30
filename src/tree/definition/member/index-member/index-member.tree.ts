import { IndexMemberContext } from '../../../../grammar/xon-parser';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class IndexMemberTree extends MemberTree {
  public isAbstract: boolean;

  public parameters: ParameterTree[];

  public statements?: StatementTree[];

  public returnType: TypeTree;

  public constructor(public ctx: IndexMemberContext) {
    super();

    this.isAbstract = !ctx.body();
    this.parameters = ctx.parameter().map((x) => new ParameterTree(x));
    this.returnType = getTypeTree(ctx.type());
    this.statements = ctx.body() && getStatementsTrees(ctx.body());
  }
}
