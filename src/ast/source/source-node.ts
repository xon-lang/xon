import { SourceContext } from '../../grammar/xon-parser';
import { Node } from '../node';
import { StatementNode } from '../statement/statement-node';
import { getStatementNodes } from '../statement/statement-node-helper';
import { SourceReference } from '../util/source-reference';

export class SourceNode implements Node {
  sourceReference: SourceReference;
  statements: StatementNode[] = [];

  constructor(ctx: SourceContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.statements = getStatementNodes(ctx.statement());
  }

  toString(): string {
    return this.statements.join('\n\n');
  }
}
