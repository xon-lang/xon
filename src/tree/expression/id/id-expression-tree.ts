// this code was generated

import { IdExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ValueMetadata } from '../../../metadata/value/value-metadata';
import { SourceRange } from '../../../util/source-range';
import { getIdTree } from '../../id/id-tree-helper';
import { IdTree } from '../../id/id-tree';
import { ExpressionTree } from '../expression-tree';

export class IdExpressionTree extends ExpressionTree {
  metadata: ValueMetadata;
  ctx: IdExpressionContext;
  sourceRange: SourceRange;
  name: IdTree;

  constructor(ctx: IdExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.addChildren(this.name)
  }

  toString(): String {
    return this.name.toString();
  }
}

// this code was generated
