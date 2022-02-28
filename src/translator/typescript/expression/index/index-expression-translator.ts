import { IndexExpressionTree } from '../../../../tree/expression/index/index-expression-tree';
import { InvokeExpressionTree } from '../../../../tree/expression/invoke/invoke-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator, getExpressionTranslators } from '../expression-translator-helper';

export class IndexExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: IndexExpressionTree, private isType: boolean) {}

  toString(): string {
    const instance = getExpressionTranslator(this.tree.instance, false);
    const args = getExpressionTranslators(this.tree.arguments, false).join(', ');
    return `${instance}[${args}]`;
  }
}
