// this code was generated

import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { Boolean, String } from '../../../lib/core';
import { Metadata } from '../../../metadata/metadata';
import { SourceRange } from '../../../util/source-range';
import { ArgumentTree } from '../../argument/argument-tree';
import { getArgumentTrees } from '../../argument/argument-tree-helper';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceRange: SourceRange;
  instance: ExpressionTree;
  hasBracket: Boolean;
  hasParen: Boolean;
  arguments: ArgumentTree[];

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    this.hasBracket = !!ctx.arguments().OPEN_BRACKET();
    this.hasParen = !!ctx.arguments().OPEN_PAREN();
    this.arguments = getArgumentTrees(ctx.arguments().argument());
    this.addChildren(this.instance, ...this.arguments)
  }

  toString(): String {
    if (this.hasBracket) {
      return `${this.instance}[${this.arguments.join(', ')}]`;
    }
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}

// this code was generated
