import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { HandlerScope } from '../handler-scope';
import { MetadataHandler } from '../metadata-handler';
import { StatementHandler } from '../statement/statement-handler';
import { TypeHandler } from '../type/type-handler';

export class AttributeHandler extends MetadataHandler {
  public constructor(scope: HandlerScope = null) {
    super(new HandlerScope(scope));
  }
  handle(tree: AttributeTree) {
    tree.id.declarationLink = tree.id.sourceReference;
    if (tree.type) {
      new TypeHandler(this.scope).handle(tree.type);
      tree.typeMetadata = tree.type.typeMetadata;
    }
    if (tree.body) {
      tree.body.forEach((x) => new StatementHandler(this.scope).handle(x));
      const lastStatement = tree.body[tree.body.length - 1];
      if (lastStatement instanceof ExpressionStatementTree)
        tree.typeMetadata = lastStatement.expression.typeMetadata;
    }
    this.scope.addDeclaration(tree);
  }
}
