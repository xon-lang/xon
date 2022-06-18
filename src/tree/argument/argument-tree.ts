// this code was generated

import { ArgumentContext } from '../../grammar/xon-parser';
import { None, String } from '../../lib/core';
import { SourceRange } from '../../util/source-range';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { Tree } from '../tree';

export class ArgumentTree extends Tree {
  ctx: ArgumentContext;
  sourceRange: SourceRange;
  name?: IdTree;
  value: ExpressionTree | None;

  constructor(ctx: ArgumentContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.name, this.value);
  }

  toString(): String {
    const name = (this.name && this.name + ': ') || '';
    return name + this.value;
  }
}

// this code was generated
