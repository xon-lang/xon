import { ArrayExpressionNode } from '../../ast/expression/array/array-expression-node';
import { ExpressionNode } from '../../ast/expression/expression-node';
import { IdExpressionNode } from '../../ast/expression/id/id-expression-node';
import { InfixExpressionNode } from '../../ast/expression/infix/infix-expression-node';
import { InvokeExpressionNode } from '../../ast/expression/invoke/invoke-expression-node';
import { LiteralExpressionNode } from '../../ast/expression/literal/literal-expression-node';
import { MemberExpressionNode } from '../../ast/expression/member/member-expression-node';
import { MethodExpressionNode } from '../../ast/expression/method/method-expression-node';
import { ParenthesizedExpressionNode } from '../../ast/expression/parenthesized/parenthesized-expression-node';
import { PrefixExpressionNode } from '../../ast/expression/prefix/prefix-expression-node';
import { Issue } from '../../issue-service/issue';
import { DeclarationScope } from '../declaration-scope';
import { ArrayExpressionMetadata } from './array/array-expression-metadata';
import { ExpressionMetadata } from './expression-metadata';
import { IdExpressionMetadata } from './id/id-expression-metadata';
import { InfixExpressionMetadata } from './infix/infix-expression-metadata';
import { InvokeExpressionMetadata } from './invoke/invoke-expression-metadata';
import { LiteralExpressionMetadata } from './literal/literal-expression-metadata';
import { MemberExpressionMetadata } from './member/member-expression-metadata';
import { MethodExpressionMetadata } from './method/method-expression-metadata';
import { PrefixExpressionMetadata } from './prefix/prefix-expression-metadata';

export function getExpressionMetadata(
  node: ExpressionNode,
  scope: DeclarationScope,
): ExpressionMetadata {
  try {
    if (node instanceof ParenthesizedExpressionNode)
      return (node.metadata = getExpressionMetadata(node.expression, scope));
    if (node instanceof ArrayExpressionNode)
      return (node.metadata = new ArrayExpressionMetadata(node, scope));
    if (node instanceof InvokeExpressionNode)
      return (node.metadata = new InvokeExpressionMetadata(node, scope));
    if (node instanceof IdExpressionNode)
      return (node.metadata = new IdExpressionMetadata(node, scope));
    if (node instanceof InfixExpressionNode)
      return (node.metadata = new InfixExpressionMetadata(node, scope));
    if (node instanceof MethodExpressionNode)
      return (node.metadata = new MethodExpressionMetadata(node, scope));
    if (node instanceof LiteralExpressionNode)
      return (node.metadata = new LiteralExpressionMetadata(node, scope));
    if (node instanceof MemberExpressionNode)
      return (node.metadata = new MemberExpressionMetadata(node, scope));
    if (node instanceof PrefixExpressionNode)
      return (node.metadata = new PrefixExpressionMetadata(node, scope));
  } catch (error) {
    Issue.errorFromNode(node, error.toString());
  }
}
