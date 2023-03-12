import { Node } from '~/parser/lexer/node';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class PostfixExpressionTree implements ExpressionTree {
  constructor(public operator: Node, public expression: ExpressionTree) {}
}
