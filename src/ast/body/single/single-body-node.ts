import { SingleBodyContext } from '../../../grammar/xon-parser';
import { StatementNode } from '../../statement/statement-node';
import { getStatementTree } from '../../statement/statement-node-helper';
import { BodyNode } from '../body-node';

export class SingleBodyNode extends BodyNode {
  statement: StatementNode;

  constructor(public ctx: SingleBodyContext) {
    super();

    this.statement = getStatementTree(ctx.statement());
  }

  toString(): string {
    return this.statement.toString();
  }
}
