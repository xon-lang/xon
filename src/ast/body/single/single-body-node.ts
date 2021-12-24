import { SingleBodyContext } from '../../../grammar/xon-parser';
import { StatementNode } from '../../statement/statement-node';
import { getStatementNode } from '../../statement/statement-node-helper';
import { SourceReference } from '../../util/source-reference';
import { BodyNode } from '../body-node';

export class SingleBodyNode implements BodyNode {
  sourceReference: SourceReference;
  statement: StatementNode;

  constructor(public ctx: SingleBodyContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.statement = getStatementNode(ctx.statement());
  }

  toString(): string {
    return `: ${this.statement}`;
  }
}
