// this code was generated

import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { Boolean, String } from '../../../lib/core';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree, getExpressionTrees } from '../expression-tree-helper';

export class InvokeExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata;
  ctx: InvokeExpressionContext;
  sourceRange: SourceRange;
  instance: ExpressionTree;
  hasBracket: Boolean;
  hasParen: Boolean;
  arguments: ExpressionTree[];

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    this.hasBracket = !!ctx.parameters().OPEN_BRACKET();
    this.hasParen = !!ctx.parameters().OPEN_PAREN();
    this.arguments = getExpressionTrees(
      ctx
        .parameters()
        .parameter()
        .map((x) => x._variable),
    );
  }

  toString(): String {
    if (this.hasBracket) {
      return `${this.instance}[${this.arguments.join(', ')}]`;
    }
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}

// this code was generated
