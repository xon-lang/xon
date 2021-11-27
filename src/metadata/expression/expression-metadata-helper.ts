import { CallExpressionTree } from '../../tree/expression/call-expression/call-expression.tree';
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { InfixExpressionTree } from '../../tree/expression/infix-expression/infix-expression.tree';
import { LambdaExpressionTree } from '../../tree/expression/lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { DeclarationScope } from '../declaration-scope';
import { CallExpressionMetadata } from './call/call-expression-metadata';
import { ExpressionMetadata } from './expression-metadata';
import { IdExpressionMetadata } from './id/id-expression-metadata';
import { InfixExpressionMetadata } from './infix/infix-expression-metadata';
import { LambdaExpressionMetadata } from './lambda/lambda-expression-metadata';
import { LiteralExpressionMetadata } from './literal/literal-expression-metadata';

export function getExpressionMetadata(
  tree: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (tree instanceof LiteralExpressionTree)
    return (tree.metadata = new LiteralExpressionMetadata(tree, scope));
  if (tree instanceof IdExpressionTree)
    return (tree.metadata = new IdExpressionMetadata(tree, scope));
  if (tree instanceof CallExpressionTree)
    return (tree.metadata = new CallExpressionMetadata(tree, scope));
  if (tree instanceof InfixExpressionTree)
    return (tree.metadata = new InfixExpressionMetadata(tree, scope));
  if (tree instanceof LambdaExpressionTree)
    return (tree.metadata = new LambdaExpressionMetadata(tree, scope));
}
