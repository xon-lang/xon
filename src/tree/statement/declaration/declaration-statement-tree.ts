// this code was generated

import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { DefinitionTree } from '../../definition/definition-tree';
import { getDefinitionTree } from '../../definition/definition-tree-helper';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTree } from '../../parameter/parameter-tree-helper';
import { StatementTree } from '../statement-tree';

export class DeclarationStatementTree extends StatementTree {
  ctx: DeclarationStatementContext;
  sourceRange: SourceRange;
  declaration: DefinitionTree | ParameterTree;

  constructor(ctx: DeclarationStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.declaration = getDefinitionTree(ctx.definition()) || getParameterTree(ctx.parameter());
    this.addChildren(this.declaration);
  }

  toString(): String {
    return this.declaration.toString();
  }
}

// this code was generated
