import { Issue } from '../../../issue-service/issue';
import { ArrayExpressionTree } from '../../../tree/expression/array/array-expression-tree';
import { ExpressionTree } from '../../../tree/expression/expression-tree';
import { GroupExpressionTree } from '../../../tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';
import { InvokeExpressionTree } from '../../../tree/expression/invoke/invoke-expression-tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { MemberExpressionTree } from '../../../tree/expression/member/member-expression-tree';
import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { PrefixExpressionTree } from '../../../tree/expression/prefix/prefix-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ArrayValueExpressionMetadata } from './array/array-value-expression-metadata';
import { IdValueExpressionMetadata } from './id/id-value-expression-metadata';
import { ImportValueExpressionMetadata } from './import/import-value-expression-metadata';
import { InfixValueExpressionMetadata } from './infix/infix-value-expression-metadata';
import { InvokeValueExpressionMetadata } from './invoke/invoke-value-expression-metadata';
import { LiteralValueExpressionMetadata } from './literal/literal-value-expression-metadata';
import { MemberValueExpressionMetadata } from './member/member-value-expression-metadata';
import { MethodValueExpressionMetadata } from './method/method-value-expression-metadata';
import { PrefixValueExpressionMetadata } from './prefix/prefix-value-expression-metadata';
import { ValueExpressionMetadata } from './value-expression-metadata';

export function getValueExpressionMetadata(
  tree: ExpressionTree,
  scope: DeclarationScope,
): ValueExpressionMetadata {
  try {
    if (tree instanceof GroupExpressionTree)
      return getValueExpressionMetadata(tree.expression, scope);
    if (tree instanceof ArrayExpressionTree) return new ArrayValueExpressionMetadata(tree, scope);
    if (tree instanceof IdExpressionTree) return new IdValueExpressionMetadata(tree, scope);
    if (tree instanceof InfixExpressionTree) return new InfixValueExpressionMetadata(tree, scope);
    if (tree instanceof InvokeExpressionTree) return new InvokeValueExpressionMetadata(tree, scope);
    if (tree instanceof LiteralExpressionTree)
      return new LiteralValueExpressionMetadata(tree, scope);
    if (tree instanceof MemberExpressionTree) return new MemberValueExpressionMetadata(tree, scope);
    if (tree instanceof MethodExpressionTree) return new MethodValueExpressionMetadata(tree, scope);
    if (tree instanceof PrefixExpressionTree) {
      if (tree.name.text === 'import') return new ImportValueExpressionMetadata(tree, scope);
      return new PrefixValueExpressionMetadata(tree, scope);
    }

    throw `Value expression metadata not found for '${tree.constructor.name}'`;
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}
