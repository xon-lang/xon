import { ArrayExpressionTree } from '../../tree/expression/array/array-expression-tree';
import { ExpressionTree } from '../../tree/expression/expression-tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '../../tree/expression/infix/infix-expression-tree';
import { InvokeExpressionTree } from '../../tree/expression/invoke/invoke-expression-tree';
import { LiteralExpressionTree } from '../../tree/expression/literal/literal-expression-tree';
import { MemberExpressionTree } from '../../tree/expression/member/member-expression-tree';
import { MethodExpressionTree } from '../../tree/expression/method/method-expression-tree';
import { ParenthesizedExpressionTree } from '../../tree/expression/parenthesized/parenthesized-expression-tree';
import { PrefixExpressionTree } from '../../tree/expression/prefix/prefix-expression-tree';
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
  node: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  try {
    if (node instanceof ParenthesizedExpressionTree)
      return (node.metadata = getExpressionMetadata(node.expression, scope));
    if (node instanceof ArrayExpressionTree)
      return (node.metadata = new ArrayExpressionMetadata(node, scope));
    if (node instanceof InvokeExpressionTree)
      return (node.metadata = new InvokeExpressionMetadata(node, scope));
    if (node instanceof IdExpressionTree)
      return (node.metadata = new IdExpressionMetadata(node, scope));
    if (node instanceof InfixExpressionTree)
      return (node.metadata = new InfixExpressionMetadata(node, scope));
    if (node instanceof MethodExpressionTree)
      return (node.metadata = new MethodExpressionMetadata(node, scope));
    if (node instanceof LiteralExpressionTree)
      return (node.metadata = new LiteralExpressionMetadata(node, scope));
    if (node instanceof MemberExpressionTree)
      return (node.metadata = new MemberExpressionMetadata(node, scope));
    if (node instanceof PrefixExpressionTree)
      return (node.metadata = new PrefixExpressionMetadata(node, scope));
  } catch (error) {
    Issue.errorFromTree(node, error.toString());
  }
}
