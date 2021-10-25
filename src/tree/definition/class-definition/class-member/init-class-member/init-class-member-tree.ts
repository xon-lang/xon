import { InitClassMemberContext } from '../../../../../grammar/xon-parser';
import { IdToken } from '../../../../id-token';
import { getStatementsFromBodyContext } from '../../../../statement/statement-tree.helper';
import { StatementTree } from '../../../../statement/statement.tree';
import { ClassMemberTree } from '../class-member.tree';

export class InitClassMemberTree extends ClassMemberTree {
  public body: StatementTree[];

  public constructor(public ctx?: InitClassMemberContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx.INIT().payload);
    this.body = getStatementsFromBodyContext(ctx.body());
  }
}
