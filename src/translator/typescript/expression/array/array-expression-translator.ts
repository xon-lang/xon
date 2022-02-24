import { ArrayExpressionTree } from '../../../../tree/expression/array/array-expression-tree';
import { ExpressionTranslator } from '../expression-translator';

export class ArrayExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: ArrayExpressionTree, private isType: boolean) {}

  toString(): string {
    return this.tree.toString();
  }
}
