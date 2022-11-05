// this code was generated

import { AssertStatementContext } from '../../../grammar/xon-parser';
import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class AssertStatementTree extends StatementTree {
  ctx: AssertStatementContext;
  sourceRange: SourceRange;
  actualExpression: ExpressionTree;
  expectExpression: ExpressionTree;

  constructor(ctx: AssertStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.actualExpression = getExpressionTree(ctx.expression(0));
    this.expectExpression = getExpressionTree(ctx.expression(1));
    this.addChildren(this.actualExpression, this.expectExpression);
  }

  toString(): String2 {
    return `actual ${this.actualExpression}\nexpect ${this.expectExpression}`;
  }
}

// this code was generated
