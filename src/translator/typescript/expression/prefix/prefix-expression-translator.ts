import { PrefixExpressionTree } from '../../../../tree/expression/prefix/prefix-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class PrefixExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: PrefixExpressionTree, private isType: boolean) {}

  toString(): string {
    if (this.tree.isIdOperator) {
      return `${this.tree.operator} ${getExpressionTranslator(this.tree.value, this.isType)}`;
    }
    return `${this.tree.operator}${getExpressionTranslator(this.tree.value, this.isType)}`;
  }
}
