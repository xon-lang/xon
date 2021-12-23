import { AttributeStatementContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { IdToken } from '../../id-token';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { StatementNode } from '../statement-node';

export class AttributeStatementNode extends StatementNode {
  id: IdNode;
  type: ExpressionNode;
  body: BodyNode;

  constructor(public ctx: AttributeStatementContext) {
    super();

    this.id = getIdNode(ctx.id());
    this.type = getExpressionNode(ctx.expr());
    this.body = getBodyNode(ctx.body());
  }

  toString(): string {
    if (this.type) {
      return `${this.id}${this.type}${this.body}`;
    }
    return `${this.id}${this.body}`;
  }
}
