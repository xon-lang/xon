import { AttributeStatementContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributeTree } from '../../attribute/attribute-tree.helper';
import { StatementTree } from '../statement.tree';

export class AttributeStatementTree extends StatementTree {
  attribute: AttributeTree;

  constructor(public ctx?: AttributeStatementContext) {
    super();
    if (!ctx) return;

    this.attribute = getAttributeTree(ctx.attribute());
  }
}
