import { String } from '../../../../lib/core';
import { MethodExpressionTree } from '../../../../tree/expression/method/method-expression-tree';
import { getParameterTranslators } from '../../parameter/parameter-translator-helper';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class MethodExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: MethodExpressionTree, private isType: boolean) {}

  toString(): String {
    const parameters = getParameterTranslators(this.tree.parameters, this.isType);
    const value = getExpressionTranslator(this.tree.value, this.isType);
    return `(${parameters.join(', ')}) => ${value}`;
  }
}
