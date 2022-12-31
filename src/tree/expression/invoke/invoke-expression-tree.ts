import { InvokeExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTree } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceSpan: SourceSpan;
  instance: ExpressionTree;
  generics: ArgumentTree[];
  arguments: ArgumentTree[];
  openGenerics: Token | null;
  closeGenerics: Token | null;
  openArguments: Token;
  closeArguments: Token;

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());

    const args = ctx.arguments().find((x) => x.OPEN().text === '[');
    this.arguments = args?.argument().map(getArgumentTree) ?? [];
    this.openArguments = argsToken.from(args.OPEN());
    this.closeArguments = argsToken.from(args.CLOSE());

    this.addChildren(this.instance, ...this.arguments);
  }
}
