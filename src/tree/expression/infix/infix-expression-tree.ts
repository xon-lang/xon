import { Node } from '~/parser/lexer/node';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class InfixExpressionTree implements ExpressionTree {
  constructor(public operator: Node, public left: ExpressionTree, public right: ExpressionTree) {}
}
