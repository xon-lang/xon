// this code was generated

import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ArrayValueExpressionMetadata } from '../../../metadata/expression/value/array/array-value-expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { ArgumentTree } from '../../argument/argument-tree';
import { getArgumentTrees } from '../../argument/argument-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class ArrayExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata;
  ctx: ArrayExpressionContext;
  sourceRange: SourceRange;
  arguments: ArgumentTree[];

  constructor(ctx: ArrayExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.arguments = getArgumentTrees(ctx.arguments().argument());
  }

  toString(): String {
    return (
      this.ctx.arguments()._open.text + this.arguments.join(', ') + this.ctx.arguments()._close.text
    );
  }
}

// this code was generated
