import { MemberExpressionContext } from '~/grammar/xon-parser';
import { Boolean2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class MemberExpressionTree extends ExpressionTree {
  ctx: MemberExpressionContext;
  sourceSpan: SourceSpan;
  instance: ExpressionTree;
  name: Token | null;
  isMeta: Boolean2;

  constructor(ctx: MemberExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    const id = ctx.ID() ?? null;
    this.name = id && Token.from(id);
    this.isMeta = ctx.MEMBER_OPERATOR().text === '::';
    this.addChildren(this.instance, this.name);
  }
}
