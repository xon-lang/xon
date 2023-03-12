import { Node } from '~/parser/lexer/node';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class TokenExpressionTree implements ExpressionTree {
  constructor(public name: Node) {}
}
