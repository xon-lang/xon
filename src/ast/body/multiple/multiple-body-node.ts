import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { StatementNode } from '../../statement/statement-node';
import { getStatementsTrees } from '../../statement/statement-node-helper';
import { BodyNode } from '../body-node';

export class MultipleBodyNode extends BodyNode {
  statements: StatementNode[];

  constructor(public ctx: MultipleBodyContext) {
    super();

    this.statements = getStatementsTrees(ctx.statement());
  }

  toString(): string {
    return this.statements.join('\n');
  }
}
