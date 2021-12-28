import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';

export class InfixExpressionFormatter implements Formatter {
  constructor(private tree: InfixExpressionTree) {}

  format(): string {
    return `${this.tree.left} ${this.tree.id} ${this.tree.right}`;
  }
}
