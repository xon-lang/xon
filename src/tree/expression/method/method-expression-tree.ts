// this code was generated

import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { Boolean } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTrees } from '../../parameter/parameter-tree-helper';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MethodExpressionTree extends ExpressionTree {
  ctx: MethodExpressionContext;
  sourceRange: SourceRange;
  hasBracket: Boolean;
  hasParen: Boolean;
  generics: ParameterTree[] = [];
  parameters: ParameterTree[] = [];
  type: ExpressionTree;
  value: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.hasBracket = !!ctx.parameters().OPEN_BRACKET();
    this.hasParen = !!ctx.parameters().OPEN_PAREN();
    this.generics = getParameterTrees(ctx.genericParameters()?.parameter());
    this.parameters = [] = getParameterTrees(ctx.parameters().parameter());
    this.type = getExpressionTree(ctx.valueType()?.expression());
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.value);
  }
}

// this code was generated
