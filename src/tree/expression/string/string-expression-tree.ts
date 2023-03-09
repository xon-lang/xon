import { StringExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class StringExpressionTree extends ExpressionTree {
  stringValue: String2;
  value: String2;

  constructor(ctx: StringExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.stringValue = ctx.text;
    this.value = ctx.text.slice(1, -1).replace(/\\'/gu, '\'');
  }

  public toString(): String2 {
    return `<integer>'${this.value}'`;
  }
}
