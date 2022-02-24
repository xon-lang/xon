import { InvokeExpressionTree } from '../../../../tree/expression/invoke/invoke-expression-tree';
import { ExpressionTranslator } from '../expression-translator';

export class InvokeExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: InvokeExpressionTree, private isType: boolean) {}

  toString(): string {
    return this.tree.toString();
  }
}
