import { LiteralExpressionTree } from '../../../../tree/expression/literal/literal-expression-tree';
import { ExpressionTranslator } from '../expression-translator';

export class LiteralExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: LiteralExpressionTree, private isType: boolean) {}

  toString(): string {
    return this.tree.toString();
  }
}
