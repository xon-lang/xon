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
    const method = ctx.method();
    this.sourceRange = SourceRange.fromContext(ctx);
    this.hasBracket = !!method._params.OPEN_BRACKET();
    this.hasParen = !!method._params.OPEN_PAREN();
    this.generics = getParameterTrees(method._generics?.parameter());
    this.parameters = [] = getParameterTrees(method._params.parameter());
    this.type = getExpressionTree(method.valueType()?.expression());
    this.value = getExpressionTree(method.expression());
    this.addChildren(...this.parameters, this.value);
  }
}

// this code was generated
