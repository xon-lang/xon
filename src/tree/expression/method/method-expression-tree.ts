// this code was generated

import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { DeclarationTree } from '../../declaration/declaration-tree';
import { getDeclarationTrees } from '../../declaration/declaration-tree-helper';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MethodExpressionTree extends ExpressionTree {
  ctx: MethodExpressionContext;
  sourceRange: SourceRange;
  generics: DeclarationTree[] = [];
  parameters: DeclarationTree[] = [];
  type: ExpressionTree;
  value: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);

    const paramsGroup = ctx.declarations();
    this.generics = getDeclarationTrees(
      paramsGroup.filter((x) => x.open().LESS())[0]?.declaration(),
    );
    this.parameters = getDeclarationTrees(
      paramsGroup.filter((x) => !x.open().LESS())[0]?.declaration(),
    );
    this.type = getExpressionTree(ctx.valueType()?.expression());
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.value);
  }
}

// this code was generated
