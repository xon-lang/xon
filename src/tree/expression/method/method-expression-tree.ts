// this code was generated

import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTrees } from '../../parameter/parameter-tree-helper';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MethodExpressionTree extends ExpressionTree {
  ctx: MethodExpressionContext;
  sourceRange: SourceRange;
  generics: ParameterTree[] = [];
  parameters: ParameterTree[] = [];
  type: ExpressionTree;
  value: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);

    const paramsGroup = ctx.parameters();
    this.generics = getParameterTrees(paramsGroup.filter((x) => x.open().LESS())[0]?.parameter());
    this.parameters = getParameterTrees(
      paramsGroup.filter((x) => !x.open().LESS())[0]?.parameter(),
    );
    this.type = getExpressionTree(ctx.valueType()?.expression());
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.value);
  }
}

// this code was generated
