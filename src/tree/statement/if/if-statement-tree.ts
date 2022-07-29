// this code was generated

import { IfStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { SourceTree } from '../../source/source-tree';
import { getSourceTree } from '../../source/source-tree-helper';
import { StatementTree } from '../statement-tree';

export class IfStatementTree extends StatementTree {
  ctx: IfStatementContext;
  sourceRange: SourceRange;
  condition: ExpressionTree;
  thenBody: SourceTree;
  elseBody?: SourceTree | null;

  constructor(ctx: IfStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.condition = getExpressionTree(ctx.expression());
    this.thenBody = getSourceTree(ctx._thenBody.source());
    this.elseBody = getSourceTree(ctx._elseBody?.source());
    this.addChildren(this.condition, this.thenBody, this.elseBody);
  }

  toString(): String {
    return `if ${this.condition}${this.thenBody}${
      (this.elseBody && '\nelse' + this.elseBody) || ''
    }`;
  }
}

// this code was generated
