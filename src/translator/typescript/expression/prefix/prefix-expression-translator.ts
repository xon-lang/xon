import { PrefixExpressionTree } from '../../../../tree/expression/prefix/prefix-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class PrefixExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: PrefixExpressionTree, private isType: boolean) {}

  toString(): string {
    const idMap = {
      not: '!',
    };
    const id = idMap[this.tree.operator.text] || this.tree.operator.text;
    return `${id}${getExpressionTranslator(this.tree.value, this.isType)}`;
  }
}
