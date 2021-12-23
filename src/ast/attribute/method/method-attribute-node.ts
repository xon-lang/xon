import { MethodAttributeContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { AttributeNode } from '../attribute-node';
import { getAttributeNodes } from '../attribute-node-helper';

export class MethodAttributeNode extends AttributeNode {
  id: IdNode;
  parameters: AttributeNode[] = [];
  type: ExpressionNode;
  body: BodyNode;

  constructor(public ctx: MethodAttributeContext) {
    super();

    this.id = getIdNode(ctx.id());
    this.parameters = getAttributeNodes(ctx.attr());
    this.type = getExpressionNode(ctx.type().expr());
    this.body = getBodyNode(ctx.body());
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}
