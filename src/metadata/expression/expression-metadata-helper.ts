import { Issue } from '~/issue/issue';
import { ExpressionMetadata } from '~/metadata/expression/expression-metadata';
import { IntegerExpressionMetadata } from '~/metadata/expression/integer/integer-expression-metadata';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';

export function getExpressionMetadata(tree: ExpressionTree): ExpressionMetadata {
  if (tree.metadata) {
    if (tree.metadata instanceof ExpressionMetadata) {
      return tree.metadata;
    }
    Issue.errorFromTree(tree, `Wrong expression metadata for "${tree.constructor.name}"`);
  }
  // if (tree instanceof ArrayExpressionTree) {
  //   if (tree.arguments.length === 1 && tree.openToken.text === '(' && tree.arguments[0].value) {
  //     return getExpressionMetadata(tree.arguments[0].value);
  //   }
  //   tree.metadata = new ArrayValueMetadata(tree);
  // }
  if (tree instanceof IntegerExpressionTree) {
    tree.metadata = new IntegerExpressionMetadata(tree);
  }
  if (tree.metadata) return tree.metadata;

  Issue.errorFromTree(tree, `Expression metadata not found for "${tree.constructor.name}"`);
}
