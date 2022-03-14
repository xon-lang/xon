import { String } from '../../../../lib/core';
import { ArrayExpressionTree } from '../../../../tree/expression/array/array-expression-tree';
import { getParameterTranslators } from '../../parameter/parameter-translator-helper';
import { ExpressionTranslator } from '../expression-translator';

export class ArrayExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: ArrayExpressionTree, private isType: boolean) {}

  toString(): String {
    const items = getParameterTranslators(this.tree.parameters, this.isType);
    return `[${items.join(', ')}]`;
  }
}
