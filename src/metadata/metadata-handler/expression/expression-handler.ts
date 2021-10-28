import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { LiteralHandler } from '../literal/literal-handler';
import { MetadataHandler } from '../metadata-handler';

export class ExpressionHandler extends MetadataHandler {
  handle(tree: ExpressionTree) {
    if (tree instanceof IdExpressionTree) {
      const assignmentTree = this.scope.findVariable(tree.id.text);
      tree.definitionMetadata = assignmentTree.definitionLink;
      tree.id.declarationLink = assignmentTree.sourceReference.clone();
      return;
    }

    if (tree instanceof LiteralExpressionTree) new LiteralHandler(this.scope).handle(tree.literal);

    throw new Error('Wrong expression tree');
  }
}
