import { InitClassMemberContext } from '../../../../../grammar/xon-parser';
import { IdToken } from '../../../../id-token';
import { getStatements } from '../../../../statement/statement-tree.helper';
import { StatementTree } from '../../../../statement/statement.tree';
import { ClassMemberTree } from '../class-member.tree';

export class InitClassMemberTree extends ClassMemberTree {
  id: IdToken;
  public body: StatementTree[];

  public constructor(public ctx?: InitClassMemberContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx.INIT().payload);
    this.body = getStatements(ctx.body());
  }
}
