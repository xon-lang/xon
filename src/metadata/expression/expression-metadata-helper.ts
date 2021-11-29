import { ArrayExpressionTree } from '../../tree/expression/array/array-expression.tree';
import { CallExpressionTree } from '../../tree/expression/call/call-expression.tree';
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression.tree';
import { InfixExpressionTree } from '../../tree/expression/infix/infix-expression.tree';
import { IsExpressionTree } from '../../tree/expression/is/is-expression.tree';
import { LambdaExpressionTree } from '../../tree/expression/lambda/lambda-expression.tree';
import { LiteralExpressionTree } from '../../tree/expression/literal/literal-expression.tree';
import { MemberExpressionTree } from '../../tree/expression/member/member-expression.tree';
import { ParenthesizedExpressionTree } from '../../tree/expression/parenthesized/parenthesized-expression.tree';
import { PipeExpressionTree } from '../../tree/expression/pipe/pipe-expression.tree';
import { PrefixExpressionTree } from '../../tree/expression/prefix/prefix-expression.tree';
import { DeclarationScope } from '../declaration-scope';
import { ArrayExpressionMetadata } from './array/array-expression-metadata';
import { CallExpressionMetadata } from './call/call-expression-metadata';
import { ExpressionMetadata } from './expression-metadata';
import { IdExpressionMetadata } from './id/id-expression-metadata';
import { InfixExpressionMetadata } from './infix/infix-expression-metadata';
import { IsExpressionMetadata } from './is/is-expression-metadata';
import { LambdaExpressionMetadata } from './lambda/lambda-expression-metadata';
import { LiteralExpressionMetadata } from './literal/literal-expression-metadata';
import { MemberExpressionMetadata } from './member/member-expression-metadata';
import { PipeExpressionMetadata } from './pipe/pipe-expression-metadata';
import { PrefixExpressionMetadata } from './prefix/prefix-expression-metadata';

export function getExpressionMetadata(
  tree: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (tree instanceof ParenthesizedExpressionTree)
    return (tree.metadata = getExpressionMetadata(tree.value, scope));

  if (tree instanceof ArrayExpressionTree)
    return (tree.metadata = new ArrayExpressionMetadata(tree, scope));
  if (tree instanceof CallExpressionTree)
    return (tree.metadata = new CallExpressionMetadata(tree, scope));
  if (tree instanceof IdExpressionTree)
    return (tree.metadata = new IdExpressionMetadata(tree, scope));
  if (tree instanceof InfixExpressionTree)
    return (tree.metadata = new InfixExpressionMetadata(tree, scope));
  if (tree instanceof IsExpressionTree)
    return (tree.metadata = new IsExpressionMetadata(tree, scope));
  if (tree instanceof LambdaExpressionTree)
    return (tree.metadata = new LambdaExpressionMetadata(tree, scope));
  if (tree instanceof LiteralExpressionTree)
    return (tree.metadata = new LiteralExpressionMetadata(tree, scope));
  if (tree instanceof MemberExpressionTree)
    return (tree.metadata = new MemberExpressionMetadata(tree, scope));
  if (tree instanceof PipeExpressionTree)
    return (tree.metadata = new PipeExpressionMetadata(tree, scope));
  if (tree instanceof PrefixExpressionTree)
    return (tree.metadata = new PrefixExpressionMetadata(tree, scope));
}
