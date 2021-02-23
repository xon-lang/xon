import { PrefixOperatorMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class PrefixOperatorMemberTree extends MemberTree {
  public operator: string;

  public returnType: TypeTree;

  public statements: StatementTree[];

  public constructor(public ctx: PrefixOperatorMemberContext) {
    super();

    this.operator = ctx
      .operator()
      .map((x) => x.text)
      .join('');

    this.returnType = ctx.type() && new TypeTree(ctx.type());
    this.statements = ctx.body() && getStatementsTrees(ctx.body());
  }
}
