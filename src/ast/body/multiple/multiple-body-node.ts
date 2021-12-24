import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { StatementNode } from '../../statement/statement-node';
import { getStatementNodes } from '../../statement/statement-node-helper';
import { SourceReference } from '../../util/source-reference';
import { BodyNode } from '../body-node';

export class MultipleBodyNode implements BodyNode {
  sourceReference: SourceReference;
  statements: StatementNode[];

  constructor(public ctx: MultipleBodyContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.statements = getStatementNodes(ctx.statement());
  }

  toString(): string {
    return this.statements.join('\n').replace(/^/gm, '  ');
  }
}
