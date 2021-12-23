import { AttributeStatementContext } from '../../../grammar/xon-parser';
import { AttributeNode } from '../../attribute/attribute-node';
import { getAttributeNode } from '../../attribute/attribute-node-helper';
import { StatementNode } from '../statement-node';

export class AttributeStatementNode extends StatementNode {
  attribute: AttributeNode;

  constructor(public ctx: AttributeStatementContext) {
    super();

    this.attribute = getAttributeNode(ctx.attr());
  }

  toString(): string {
    return this.attribute.toString();
  }
}
