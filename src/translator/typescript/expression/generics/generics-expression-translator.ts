import { String } from '../../../../lib/core';
import { GenericsExpressionTree } from '../../../../tree/expression/generics/generics-expression-tree';
import { getParameterTranslators } from '../../parameter/parameter-translator-helper';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class GenericsExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: GenericsExpressionTree, private isType: boolean) {}

  toString(): String {
    const instance = getExpressionTranslator(this.tree.instance, this.isType);
    const generics = getParameterTranslators(this.tree.generics).join(', ');
    return `${instance}<${generics}>`;
  }
}
