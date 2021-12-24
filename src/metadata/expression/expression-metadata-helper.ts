import { ArrayExpressionNode } from '../../ast/expression/array/array-expression-node';
import { ExpressionNode } from '../../ast/expression/expression-node';
import { IdExpressionNode } from '../../ast/expression/id/id-expression-node';
import { IndexerExpressionNode } from '../../ast/expression/indexer/indexer-expression-node';
import { InfixExpressionNode } from '../../ast/expression/infix/infix-expression-node';
import { CallExpressionNode } from '../../ast/expression/invoke/invoke-expression-node';
import { IsExpressionNode } from '../../ast/expression/is/is-expression-node';
import { LiteralExpressionNode } from '../../ast/expression/literal/literal-expression-node';
import { MemberExpressionNode } from '../../ast/expression/member/member-expression-node';
import { ParenthesizedExpressionNode } from '../../ast/expression/parenthesized/parenthesized-expression-node';
import { PipeExpressionNode } from '../../ast/expression/pipe/pipe-expression-node';
import { PrefixExpressionNode } from '../../ast/expression/prefix/prefix-expression-node';
import { DeclarationScope } from '../declaration-scope';
import { ArrayExpressionMetadata } from './array/array-expression-metadata';
import { ExpressionMetadata } from './expression-metadata';
import { IdExpressionMetadata } from './id/id-expression-metadata';
import { InfixExpressionMetadata } from './infix/infix-expression-metadata';
import { CallExpressionMetadata } from './invoke/invoke-expression-metadata';
import { IsExpressionMetadata } from './is/is-expression-metadata';
import { LambdaExpressionMetadata } from './lambda/lambda-expression-metadata';
import { LiteralExpressionMetadata } from './literal/literal-expression-metadata';
import { MemberExpressionMetadata } from './member/member-expression-metadata';
import { PipeExpressionMetadata } from './pipe/pipe-expression-metadata';
import { PrefixExpressionMetadata } from './prefix/prefix-expression-metadata';

export function getExpressionMetadata(
  node: ExpressionNode,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (node instanceof ParenthesizedExpressionNode)
    return (node.metadata = getExpressionMetadata(node.expression, scope));

  if (node instanceof ArrayExpressionNode)
    return (node.metadata = new ArrayExpressionMetadata(node, scope));
  if (node instanceof CallExpressionNode)
    return (node.metadata = new CallExpressionMetadata(node, scope));
  if (node instanceof IdExpressionNode)
    return (node.metadata = new IdExpressionMetadata(node, scope));
  if (node instanceof InfixExpressionNode)
    return (node.metadata = new InfixExpressionMetadata(node, scope));
  if (node instanceof IsExpressionNode)
    return (node.metadata = new IsExpressionMetadata(node, scope));
  if (node instanceof IndexerExpressionNode)
    return (node.metadata = new LambdaExpressionMetadata(node, scope));
  if (node instanceof LiteralExpressionNode)
    return (node.metadata = new LiteralExpressionMetadata(node, scope));
  if (node instanceof MemberExpressionNode)
    return (node.metadata = new MemberExpressionMetadata(node, scope));
  if (node instanceof PipeExpressionNode)
    return (node.metadata = new PipeExpressionMetadata(node, scope));
  if (node instanceof PrefixExpressionNode)
    return (node.metadata = new PrefixExpressionMetadata(node, scope));
}
