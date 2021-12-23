import { ExprContext } from '../../../grammar/xon-parser';
import { Issue } from '../../../issue-service/issue';
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
      this.id = node.id.name;
    } else if (node instanceof InfixExpressionNode) {
      if (node.id.text !== 'as') Issue.error(ctx, "Must be 'as' operator");
      if (!(node.left instanceof IdExpressionNode)) Issue.error(ctx, 'Must be id');
      if (!(node.right instanceof IdExpressionNode)) Issue.error(ctx, 'Must be id');

      this.id = node.left.id.name;
      this.alias = node.right.id.name;
    } else {
      Issue.error(ctx, 'Wrong expression type');
    }
  }

  toString(): string {
    if (this.alias) {
      return `${this.id.text} as ${this.alias.text}`;
    }
    return `${this.id.text}`;
  }
}
