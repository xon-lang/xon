import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { StatementTree } from '../../../tree/statement/statement.tree';
import { VariableDeclarationStatementTree } from '../../../tree/statement/variable-declaration-statement/variable-declaration-statement.tree';
import { ExpressionHandler } from '../expression/expression-handler';
import { MetadataHandler } from '../metadata-handler';
import { TypeHandler } from '../type/type-handler';

export class StatementHandler extends MetadataHandler {
  handle(tree: StatementTree) {
    if (tree instanceof ExpressionStatementTree) {
      new ExpressionHandler(this.scope).handle(tree.expression);
      return;
    }
    if (tree instanceof VariableDeclarationStatementTree) {
      tree.id.declarationLink = tree.id.sourceReference;
      if (tree.type) new TypeHandler(this.scope).handle(tree.type);
      if (tree.value) new ExpressionHandler(this.scope).handle(tree.value);
      tree.typeMetadata = tree.type?.typeMetadata || tree.value.typeMetadata;
      this.scope.addDeclaration(tree);
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
