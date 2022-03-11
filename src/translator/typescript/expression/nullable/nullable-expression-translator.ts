import { String } from '../../../../lib/core';
import { NullableExpressionTree } from '../../../../tree/expression/nullable/nullable-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class NullableExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: NullableExpressionTree, private isType: boolean) {}

  toString(): String {
    if (this.isType) {
      return `(${getExpressionTranslator(this.tree.value, this.isType)} | null)`;
    }
    return `${getExpressionTranslator(this.tree.value, this.isType)}?`;
  }
}
