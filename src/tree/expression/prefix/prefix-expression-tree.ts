// this code was generated

import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { Metadata } from '../../../metadata/metadata';
import { getIdToken, IdToken } from '../../../util/id-token';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class PrefixExpressionTree extends ExpressionTree {
  metadata: Metadata;
  sourceRange: SourceRange;
  name: IdToken;
  value: ExpressionTree;

  constructor(private ctx: PrefixExpressionContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdToken(ctx._op);
    this.value = getExpressionTree(ctx.expression());
  }

  toString(): String {
    let name;
    name = (this.ctx.OP() && this.name) || this.name + ' ';
    return `${name}${this.value}`;
  }
}

// this code was generated
