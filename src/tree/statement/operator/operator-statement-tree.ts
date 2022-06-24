// this code was generated

import { OperatorStatementContext } from '../../../grammar/xon-parser';
import { None, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { getIdTree } from '../../id/id-tree-helper';
import { IdTree } from '../../id/id-tree';
import { StatementTree } from '../statement-tree';
import { SourceTree } from '../../source/source-tree';
import { getSourceTree } from '../../source/source-tree-helper';

export class OperatorStatementTree extends StatementTree {
  ctx: OperatorStatementContext;
  sourceRange: SourceRange;
  name: IdTree;
  type?: ExpressionTree | None;
  body?: SourceTree | None;

  constructor(ctx: OperatorStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.type = getExpressionTree(ctx._type);
    this.body = getSourceTree(ctx.body()?.source());
    this.addChildren(this.name, this.type, this.body);
  }

  toString(): String {
    return `operator ${this.name} ${this.type}${this.body}`;
  }
}

// this code was generated
