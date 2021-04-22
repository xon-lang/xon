import { LoopStatementContext } from '../../../grammar/xon-parser';
import { getBody } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class LoopStatementTree extends StatementTree {
  public body: StatementTree[];

  public constructor(public ctx?: LoopStatementContext) {
    super();
    if (!ctx) return;

    this.body = getBody(ctx.body());
  }
}
