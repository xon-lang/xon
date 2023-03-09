import { IdExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token';

export class IdExpressionTree extends ExpressionTree {
  name: TokenTree;

  constructor(ctx: IdExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.name = TokenTree.from(ctx.ID());
    this.addChildren(this.name);
  }

  public toString(): String2 {
    return `<id>'${this.name.text}'`;
  }
}
