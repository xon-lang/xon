// this code was generated

import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { getIdToken, IdToken } from '../../../util/id-token';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class PrefixExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata;
  sourceRange: SourceRange;
  name: IdToken;
  value: ExpressionTree;

  constructor(ctx: PrefixExpressionContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdToken(ctx._op);
    this.value = getExpressionTree(ctx.expression());
  }

  toString(): String {
    return `${this.name}${this.value}`;
  }
}

// this code was generated
