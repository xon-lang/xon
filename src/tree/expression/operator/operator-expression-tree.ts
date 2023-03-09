import { OperatorExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token';

export class OperatorExpressionTree extends ExpressionTree {
  name: TokenTree;

  constructor(ctx: OperatorExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.name = TokenTree.from(ctx.OPERATOR());
    this.addChildren(this.name);
  }

  public toString(): String2 {
    return `<operator>'${this.name.text}'`;
  }
}
