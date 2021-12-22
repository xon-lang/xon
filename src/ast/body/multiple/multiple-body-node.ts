import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { StatementNode } from '../../statement/statement-node';
import { getStatementNodes } from '../../statement/statement-node-helper';
import { BodyNode } from '../body-node';

export class MultipleBodyNode extends BodyNode {
  statements: StatementNode[];

  constructor(public ctx: MultipleBodyContext) {
    super();

    this.statements = getStatementNodes(ctx.statement());
  }

  toString(): string {
    return this.statements.join('\n').replace(/^/gm, '  ');
  }
}
