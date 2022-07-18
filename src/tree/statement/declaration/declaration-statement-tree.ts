// this code was generated

import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { DeclarationTree } from '../../declaration/declaration-tree';
import { getDeclarationTree } from '../../declaration/declaration-tree-helper';
import { StatementTree } from '../statement-tree';

export class DeclarationStatementTree extends StatementTree {
  ctx: DeclarationStatementContext;
  sourceRange: SourceRange;
  declaration: DeclarationTree;

  constructor(ctx: DeclarationStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.declaration = getDeclarationTree(ctx.declaration());
    this.addChildren(this.declaration);
  }

  toString(): String {
    return this.declaration.toString();
  }
}

// this code was generated
