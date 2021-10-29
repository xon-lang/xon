import { StatementTree } from '../../../tree/statement/statement.tree';
import { LiteralHandler } from '../literal/literal-handler';
import { MetadataHandler } from '../metadata-handler';

export class StatementHandler extends MetadataHandler {
  handle(tree: StatementTree) {
    if (tree instanceof ExpressionStatementTree) {
      new LiteralHandler(this.scope).handle(tree.literal);
      tree.definitionMetadata = tree.literal.definitionMetadata;
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
