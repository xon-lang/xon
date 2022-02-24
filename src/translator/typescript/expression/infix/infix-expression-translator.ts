import { InfixExpressionTree } from '../../../../tree/expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '../../../../tree/expression/literal/literal-expression-tree';
import { ExpressionTranslator } from '../expression-translator';

export class InfixExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: InfixExpressionTree, private isType: boolean) {}

  toString(): string {
    return this.tree.toString();
  }
}
