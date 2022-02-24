import { ParenthesizedExpressionTree } from '../../../../tree/expression/parenthesized/parenthesized-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class ParenthesizedExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: ParenthesizedExpressionTree, private isType: boolean) {}

  toString(): string {
    return `(${getExpressionTranslator(this.tree.expression, this.isType)})`;
  }
}
