import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { DeclarationTree } from '../../declaration/declaration-tree';
import { getDeclarationTree } from '../../declaration/declaration-tree-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementTree } from '../statement-tree';

export class DeclarationStatementTree implements StatementTree {
  sourceReference: SourceReference;
  declaration: DeclarationTree;

  constructor(ctx: DeclarationStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.declaration = getDeclarationTree(ctx.declaration());
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}
