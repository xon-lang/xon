import { ArrayExpressionNode } from '../../tree/expression/array/array-expression-node';
import { CallExpressionTree } from '../../tree/expression/invoke/invoke-expression-node';
import { ExpressionNode } from '../../tree/expression/expression-node';
import { IdExpressionNode } from '../../tree/expression/id/id-expression-node';
import { InfixExpressionNode } from '../../tree/expression/infix/infix-expression-node';
import { IsExpressionNode } from '../../tree/expression/is/is-expression-node';
import { IndexerExpressionNode } from '../../tree/expression/indexer/indexer-expression-node';
import { LiteralExpressionNode } from '../../tree/expression/literal/literal-expression-node';
import { MemberExpressionNode } from '../../tree/expression/member/member-expression-node';
import { ParenthesizedExpressionNode } from '../../tree/expression/parenthesized/parenthesized-expression-node';
import { PipeExpressionTree } from '../../tree/expression/pipe/pipe-expression-node';
import { PrefixExpressionNode } from '../../tree/expression/prefix/prefix-expression-node';
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
  tree: ExpressionNode,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (tree instanceof ParenthesizedExpressionNode)
    return (tree.metadata = getExpressionMetadata(tree.expression, scope));

  if (tree instanceof ArrayExpressionNode)
    return (tree.metadata = new ArrayExpressionMetadata(tree, scope));
  if (tree instanceof CallExpressionTree)
    return (tree.metadata = new CallExpressionMetadata(tree, scope));
  if (tree instanceof IdExpressionNode)
    return (tree.metadata = new IdExpressionMetadata(tree, scope));
  if (tree instanceof InfixExpressionNode)
    return (tree.metadata = new InfixExpressionMetadata(tree, scope));
  if (tree instanceof IsExpressionNode)
    return (tree.metadata = new IsExpressionMetadata(tree, scope));
  if (tree instanceof IndexerExpressionNode)
    return (tree.metadata = new LambdaExpressionMetadata(tree, scope));
  if (tree instanceof LiteralExpressionNode)
    return (tree.metadata = new LiteralExpressionMetadata(tree, scope));
  if (tree instanceof MemberExpressionNode)
    return (tree.metadata = new MemberExpressionMetadata(tree, scope));
  if (tree instanceof PipeExpressionTree)
    return (tree.metadata = new PipeExpressionMetadata(tree, scope));
  if (tree instanceof PrefixExpressionNode)
    return (tree.metadata = new PrefixExpressionMetadata(tree, scope));
}
