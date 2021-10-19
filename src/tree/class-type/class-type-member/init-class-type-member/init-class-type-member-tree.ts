import { InitClassTypeMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsFromBodyContext } from '../../../statement/statement-tree.helper';
import { StatementTree } from '../../../statement/statement.tree';
import { ClassTypeMemberTree } from '../class-type-member.tree';

export class InitClassTypeMemberTree extends ClassTypeMemberTree {
  public body: StatementTree[];

  public constructor(public ctx?: InitClassTypeMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.INIT().text;
    this.body = getStatementsFromBodyContext(ctx.body());
  }
}
