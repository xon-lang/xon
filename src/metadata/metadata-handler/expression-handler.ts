import { AssignmentTree } from '../../tree/assignment/assignment.tree';
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { LiteralHandler } from './literal-handler';
import { MetadataHandler } from './metadata-handler';

export class ExpressionHandler extends MetadataHandler {
  handle(tree: ExpressionTree) {
    if (tree instanceof IdExpressionTree) {
      const assignmentTree = this.scope.find(tree.id.text) as AssignmentTree;
      tree.definitionMetadata = assignmentTree.definitionMetadata;
      tree.id.declarationReference = assignmentTree.sourceReference.clone();
    } else if (tree instanceof LiteralExpressionTree)
      new LiteralHandler(this.scope).handle(tree.literal);
    else throw new Error('Wrong expression tree');
  }
}
