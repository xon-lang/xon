import { ExprContext } from '../../../grammar/xon-parser';
import { Issue } from '../../../issue-service/issue';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { InfixExpressionNode } from '../../expression/infix/infix-expression-node';
import { Node } from '../../node';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';

export class ImportMemberNode implements Node {
  sourceReference: SourceReference;
  id: IdToken;
  alias?: IdToken;

  constructor(ctx: ExprContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    const node = getExpressionNode(ctx);
    if (node instanceof IdExpressionNode) {
      this.id = node.id.name;
    } else if (node instanceof InfixExpressionNode) {
      if (node.id.text !== 'as') Issue.errorFromContext(ctx, "Must be 'as' operator");
      if (!(node.left instanceof IdExpressionNode)) Issue.errorFromContext(ctx, 'Must be id');
      if (!(node.right instanceof IdExpressionNode)) Issue.errorFromContext(ctx, 'Must be id');

      this.id = node.left.id.name;
      this.alias = node.right.id.name;
    } else {
      Issue.errorFromContext(ctx, 'Wrong expression type');
    }
  }

  toString(): string {
    if (this.alias) {
      return `${this.id.text} as ${this.alias.text}`;
    }
    return `${this.id.text}`;
  }
}
