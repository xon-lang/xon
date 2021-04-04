import { StringFormatExpressionContext } from '../../../grammar/xon-parser';
import { parseExpression } from '../../../parse';
import { PlainTypeTree } from '../../type/plain-type/plain-type.tree';
import { createPlainType } from '../../type/type-helper';
import { ExpressionTree } from '../expression.tree';
import { ParenthesizedExpressionTree } from '../parenthesized-expression/parenthesized-expression.tree';

export class StringFormatExpressionTree extends ExpressionTree {
  public value: ParenthesizedExpressionTree;

  public constructor(public ctx: StringFormatExpressionContext) {
    super();

    const code = ctx.text
      .replace(/\{(.*?)\}/g, (z, x) => `" + (${x}) + "`)
      .replace(/\+ "" \+/g, '+')
      .replace(/"" \+/, '')
      .replace(/\+ ""$/, '')
      .trim();

    this.value = parseExpression(`(${code})`);
  }

  // eslint-disable-next-line class-methods-use-this
  public getType(): PlainTypeTree {
    return createPlainType('String');
  }
}
