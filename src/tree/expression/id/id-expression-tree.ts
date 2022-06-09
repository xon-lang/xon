// this code was generated

import { IdExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ValueMetadata } from '../../../metadata/value/value-metadata';
import { getIdToken, IdToken } from '../../../util/id-token';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';

export class IdExpressionTree extends ExpressionTree {
  metadata: ValueMetadata;
  ctx: IdExpressionContext;
  sourceRange: SourceRange;
  name: IdToken;

  constructor(ctx: IdExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdToken(ctx._name);
  }

  toString(): String {
    return this.name.toString();
  }
}

// this code was generated
