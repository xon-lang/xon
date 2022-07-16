// this code was generated

import { ForStatementContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTree } from '../../parameter/parameter-tree-helper';
import { SourceTree } from '../../source/source-tree';
import { getSourceTree } from '../../source/source-tree-helper';
import { StatementTree } from '../statement-tree';

export class ForStatementTree extends StatementTree {
  ctx: ForStatementContext;
  sourceRange: SourceRange;
  parameter?: ParameterTree;
  expression: ExpressionTree;
  body: SourceTree;

  constructor(ctx: ForStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.parameter = getParameterTree(ctx.parameter());
    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.parameter, this.expression, this.body);
  }
}

// this code was generated
