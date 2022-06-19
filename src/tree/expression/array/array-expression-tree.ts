// this code was generated

import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { Metadata } from '../../../metadata/metadata';
import { SourceRange } from '../../../util/source-range';
import { ArgumentTree } from '../../argument/argument-tree';
import { getArgumentTrees } from '../../argument/argument-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class ArrayExpressionTree extends ExpressionTree {
  ctx: ArrayExpressionContext;
  sourceRange: SourceRange;
  arguments: ArgumentTree[];

  constructor(ctx: ArrayExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.arguments = getArgumentTrees(ctx.arguments().argument());
    this.addChildren(...this.arguments);
  }

  toString(): String {
    return (
      this.ctx.arguments()._open.text + this.arguments.join(', ') + this.ctx.arguments()._close.text
    );
  }
}

// this code was generated
