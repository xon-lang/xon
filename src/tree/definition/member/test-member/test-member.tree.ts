import { TestMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-tree.helper';
import { StatementTree } from '../../../statement/statement.tree';
import { MemberTree } from '../member.tree';

export class TestMemberTree extends MemberTree {
  public body: StatementTree[];

  public constructor(public ctx?: TestMemberContext) {
    super();
    if (!ctx) return;

    const QUOTE_START = 1;
    const QUOTE_END = -1;
    this.name = ctx.STRING_LITERAL().text.slice(QUOTE_START, QUOTE_END).replace(/\\"/g, '"');
    this.body = getStatementsTrees(ctx.body());
  }
}
