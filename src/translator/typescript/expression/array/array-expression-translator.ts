import { String } from '../../../../lib/core';
import { ArrayExpressionTree } from '../../../../tree/expression/array/array-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslators } from '../expression-translator-helper';

export class ArrayExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: ArrayExpressionTree, private isType: boolean) {}

  toString(): String {
    const items = getExpressionTranslators(this.tree.items, this.isType);
    return `[${items.join(', ')}]`;
  }
}
