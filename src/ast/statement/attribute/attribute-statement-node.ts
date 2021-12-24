import { AttributeStatementContext } from '../../../grammar/xon-parser';
import { AttributeNode } from '../../attribute/attribute-node';
import { getAttributeNode } from '../../attribute/attribute-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class AttributeStatementNode implements StatementNode {
  sourceReference: SourceReference;
  attribute: AttributeNode;

  constructor(ctx: AttributeStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.attribute = getAttributeNode(ctx.attribute());
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}
