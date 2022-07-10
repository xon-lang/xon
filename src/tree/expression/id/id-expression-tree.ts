// this code was generated

import { IdExpressionContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class IdExpressionTree extends ExpressionTree {
  ctx: IdExpressionContext;
  sourceRange: SourceRange;
  name: IdTree;

  constructor(ctx: IdExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.addChildren(this.name);
  }
}

// this code was generated
