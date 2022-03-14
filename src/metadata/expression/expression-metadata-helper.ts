import { Issue } from '../../issue-service/issue';
import { ArrayExpressionTree } from '../../tree/expression/array/array-expression-tree';
import { ExpressionTree } from '../../tree/expression/expression-tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '../../tree/expression/infix/infix-expression-tree';
import { InvokeExpressionTree } from '../../tree/expression/invoke/invoke-expression-tree';
import { LiteralExpressionTree } from '../../tree/expression/literal/literal-expression-tree';
import { MemberExpressionTree } from '../../tree/expression/member/member-expression-tree';
import { MethodExpressionTree } from '../../tree/expression/method/method-expression-tree';
import { GroupExpressionTree } from '../../tree/expression/group/group-expression-tree';
import { PrefixExpressionTree } from '../../tree/expression/prefix/prefix-expression-tree';
import { DeclarationScope } from '../scope/declaration-scope';
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
  tree: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  try {
    if (tree instanceof GroupExpressionTree)
      return getExpressionMetadata(tree.expression, scope);
    if (tree instanceof ArrayExpressionTree) return new ArrayExpressionMetadata(tree, scope);
    if (tree instanceof IdExpressionTree) return new IdExpressionMetadata(tree, scope);
    if (tree instanceof InfixExpressionTree) return new InfixExpressionMetadata(tree, scope);
    if (tree instanceof InvokeExpressionTree) return new InvokeExpressionMetadata(tree, scope);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionMetadata(tree, scope);
    if (tree instanceof MemberExpressionTree) return new MemberExpressionMetadata(tree, scope);
    if (tree instanceof MethodExpressionTree) return new MethodExpressionMetadata(tree, scope);
    if (tree instanceof PrefixExpressionTree) return new PrefixExpressionMetadata(tree, scope);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}
