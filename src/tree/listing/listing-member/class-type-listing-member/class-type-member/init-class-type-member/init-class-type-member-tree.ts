import { InitClassMemberContext } from '../../../../../../grammar/xon-parser';
import { getStatementsFromBodyContext } from '../../../../../statement/statement-tree.helper';
import { StatementTree } from '../../../../../statement/statement.tree';
import { ClassTypeMemberTree } from '../class-type-member.tree';

export class InitClassTypeMemberTree extends ClassTypeMemberTree {
  public body: StatementTree[];

  public constructor(public ctx?: InitClassMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.INIT().text;
    this.body = getStatementsFromBodyContext(ctx.body());
  }
}
