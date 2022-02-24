import { NullableExpressionTree } from '../../../../tree/expression/nullable/nullable-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class NullableExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: NullableExpressionTree, private isType: boolean) {}

  toString(): string {
    return `${getExpressionTranslator(this.tree.value, this.isType)}?`;
  }
}
