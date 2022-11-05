// this code was generated

import { ExportStatementContext } from '../../../grammar/xon-parser';
import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class ExportStatementTree extends StatementTree {
  ctx: ExportStatementContext;
  sourceRange: SourceRange;
  path: ExpressionTree;

  constructor(ctx: ExportStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.path = getExpressionTree(ctx._path);
    this.addChildren(this.path);
  }

  toString(): String2 {
    return `export ${this.path}`;
  }
}

// this code was generated
