import { BodyContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getStatementTree } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';

export class BodyTree extends BaseTree {
  isAssign: boolean;
  statements: StatementTree[];

  constructor(public ctx?: BodyContext) {
    super();
    if (!ctx) return;

    this.isAssign = ctx.EQUAL() !== null;
    if (this.isAssign && this.statements.length !== 1)
      throw new Error('Should be single expression');

    this.statements = ctx.statement()?.map(getStatementTree);
  }
}
