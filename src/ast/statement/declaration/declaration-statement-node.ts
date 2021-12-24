import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { DeclarationNode } from '../../declaration/declaration-node';
import { getDeclarationNode } from '../../declaration/declaration-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class DeclarationStatementNode implements StatementNode {
  sourceReference: SourceReference;
  declaration: DeclarationNode;

  constructor(ctx: DeclarationStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.declaration = getDeclarationNode(ctx.declaration());
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}
