// this code was generated

import { WhileStatementContext } from '../../../grammar/xon-parser';
import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { SourceTree } from '../../source/source-tree';
import { getSourceTree } from '../../source/source-tree-helper';
import { StatementTree } from '../statement-tree';

export class WhileStatementTree extends StatementTree {
  ctx: WhileStatementContext;
  sourceRange: SourceRange;
  expression: ExpressionTree;
  body: SourceTree;

  constructor(ctx: WhileStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.expression, this.body);
  }

  toString(): String2 {
    return `while ${this.expression}${this.body}`;
  }
}

// this code was generated
