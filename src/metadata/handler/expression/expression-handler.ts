import { CallExpressionTree } from '../../../tree/expression/call-expression/call-expression.tree';
import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { ClassMetadata } from '../../type/class-metadata';
import { LiteralHandler } from '../literal/literal-handler';
import { MetadataHandler } from '../metadata-handler';

export class ExpressionHandler extends MetadataHandler {
  handle(tree: ExpressionTree) {
    if (tree instanceof LiteralExpressionTree) {
      new LiteralHandler(this.scope).handle(tree.literal);
      tree.typeMetadata = tree.literal.typeMetadata;
      return;
    }
    if (tree instanceof IdExpressionTree) {
      tree.typeMetadata = this.scope.findDeclaration(tree.id.text, tree.typeArguments.length);
      tree.id.declarationLink = tree.typeMetadata.sourceReference;
      return;
    }
    if (tree instanceof CallExpressionTree) {
      this.handle(tree.instance)
      if(tree.instance.typeMetadata instanceof ClassMetadata)
      tree.typeMetadata = this.scope.findDeclaration(tree);
      tree.id.declarationLink = tree.typeMetadata.sourceReference;
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
