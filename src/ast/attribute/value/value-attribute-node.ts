import { ValueAttributeContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { AttributeNode } from '../attribute-node';

export class ValueAttributeNode extends AttributeNode {
  id: IdNode;
  type: ExpressionNode;
  body: BodyNode;

  constructor(public ctx: ValueAttributeContext) {
    super();

    this.id = getIdNode(ctx.id());
    this.type = getExpressionNode(ctx.type().expr());
    this.body = getBodyNode(ctx.body());
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}
