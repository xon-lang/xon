// this code was generated

import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ValueMetadata } from '../../../metadata/value/value-metadata';
import { SourceRange } from '../../../util/source-range';
import { getIdTree } from '../../id/id-tree-helper';
import { IdTree } from '../../id/id-tree';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MemberExpressionTree extends ExpressionTree {
  metadata: ValueMetadata;
  ctx: MemberExpressionContext;
  sourceRange: SourceRange;
  instance: ExpressionTree;
  name: IdTree;

  constructor(ctx: MemberExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    this.name = getIdTree(ctx._name);
    this.addChildren(this.instance, this.name)
  }

  toString(): String {
    return `${this.instance}.${this.name}`;
  }
}

// this code was generated
