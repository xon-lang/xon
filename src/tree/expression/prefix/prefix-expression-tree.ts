// this code was generated

import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { Metadata } from '../../../metadata/metadata';
import { SourceRange } from '../../../util/source-range';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class PrefixExpressionTree extends ExpressionTree {
  sourceRange: SourceRange;
  name: IdTree;
  value: ExpressionTree;

  constructor(private ctx: PrefixExpressionContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._op);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.name, this.value);
  }

  toString(): String {
    let name;
    name = (this.ctx.OP() && this.name) || this.name + ' ';
    return `${name}${this.value}`;
  }
}

// this code was generated
