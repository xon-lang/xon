import { String } from '../../../../lib/core';
import { InvokeExpressionTree } from '../../../../tree/expression/invoke/invoke-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator, getExpressionTranslators } from '../expression-translator-helper';

export class InvokeExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: InvokeExpressionTree, private isType: boolean) {}

  toString(): String {
    const instance = getExpressionTranslator(this.tree.instance, this.isType);
    const args = getExpressionTranslators(this.tree.arguments, this.isType).join(', ');
    if (this.tree.hasBracket) {
      return `${instance}[${args}]`;
    }
    return `${instance}(${args})`;
  }
}
