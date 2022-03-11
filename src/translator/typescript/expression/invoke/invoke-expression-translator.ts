import { String } from '../../../../lib/core';
import { InvokeExpressionTree } from '../../../../tree/expression/invoke/invoke-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator, getExpressionTranslators } from '../expression-translator-helper';

export class InvokeExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: InvokeExpressionTree, private isType: boolean) {}

  toString(): String {
    const instance = getExpressionTranslator(this.tree.instance, false);
    const args = getExpressionTranslators(this.tree.arguments, false).join(', ');
    return `${instance}(${args})`;
  }
}
