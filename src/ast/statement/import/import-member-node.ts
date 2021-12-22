import { ExprContext } from '../../../grammar/xon-parser';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { InfixExpressionNode } from '../../expression/infix/infix-expression-node';
import { IdToken } from '../../id-token';
import { Node } from '../../node';

export class ImportMemberNode extends Node {
  id: IdToken;
  alias?: IdToken;

  constructor(public ctx: ExprContext) {
    super();
    const node = getExpressionNode(ctx);
    if (node instanceof IdExpressionNode) {
      this.id = node.id;
    } else if (node instanceof InfixExpressionNode) {
      if (node.id.text !== 'as') throw new Error("Must be 'as' operator");
      if (!(node.left instanceof IdExpressionNode)) throw new Error('Must be id');
      if (!(node.right instanceof IdExpressionNode)) throw new Error('Must be id');

      this.id = node.left.id;
      this.alias = node.right.id;
    } else {
      throw new Error('Wrong expression type');
    }
  }

  toString(): string {
    if (this.alias) {
      return `${this.id.text} as ${this.alias.text}`;
    }
    return `${this.id.text}`;
  }
}
