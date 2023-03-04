import { LambdaExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class LambdaExpressionTree extends ExpressionTree {
  ctx: LambdaExpressionContext;
  sourceSpan: SourceSpan;
  generics: ExpressionTree[] = [];
  parameters: ExpressionTree[] = [];
  expression: ExpressionTree;

  constructor(ctx: LambdaExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const paramsGroup = ctx.parameters();
    const generics = paramsGroup.filter((x) => x.OPEN().text === '{')[0]?.expression() ?? [];
    this.generics = generics.map(getExpressionTree);
    const parameters = paramsGroup.filter((x) => x.OPEN().text === '(' || x.OPEN().text === '[')[0]?.expression() ?? [];
    this.parameters = parameters.map(getExpressionTree);

    this.expression = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.expression);
  }
}
