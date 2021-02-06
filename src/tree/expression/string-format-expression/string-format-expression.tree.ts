import { StringFormatExpressionContext } from '../../../grammar/xon-parser';
import { parseExpression } from '../../../parse';
import { ExpressionTree } from '../expression.tree';
import { ParenthesizedExpressionTree } from '../parenthesized-expression/parenthesized-expression.tree';

export class StringFormatExpressionTree extends ExpressionTree {
  value: ParenthesizedExpressionTree;

  constructor(public ctx: StringFormatExpressionContext) {
    super();

    const code = ctx.text
      .replace(/\{(.*?)\}/g, (z, x) => `' + (${x}) + '`)
      .replace(/\+ '' \+/g, '+')
      .replace(/'' \+/, '')
      .replace(/\+ ''$/, '')
      .trim();

    this.value = parseExpression(`(${code})`);
  }
}
