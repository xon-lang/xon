import { SourceContext } from '../../grammar/xon-parser';
import { Node } from '../node';
import { StatementNode } from '../statement/statement-node';
import { getStatementNodes } from '../statement/statement-node-helper';

export class SourceNode extends Node {
  statements: StatementNode[] = [];

  constructor(public ctx: SourceContext) {
    super();

    this.statements = getStatementNodes(ctx.statement());
  }

  toString(): string {
    return this.statements.join('\n\n');
  }
}
