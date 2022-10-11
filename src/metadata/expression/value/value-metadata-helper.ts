import { Issue } from '../../../issue/issue';
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
import { ArrayValueMetadata } from './array/array-value-metadata';
import { IdValueMetadata } from './id/id-value-metadata';
import { ImportValueMetadata } from './import/import-value-metadata';
import { InfixValueMetadata } from './infix/infix-value-metadata';
import { InvokeValueMetadata } from './invoke/invoke-value-metadata';
import { LiteralValueMetadata } from './literal/literal-value-metadata';
import { MemberValueMetadata } from './member/member-value-metadata';
import { MethodValueMetadata } from './method/method-value-metadata';
import { PrefixValueMetadata } from './prefix/prefix-value-metadata';
import { ValueMetadata } from './value-metadata';

export function fillValueMetadata(tree: ExpressionTree): ValueMetadata {
  if (tree instanceof GroupExpressionTree) {
    return (tree.metadata = fillValueMetadata(tree.expression));
  }
  if (tree instanceof ArrayExpressionTree) {
    return (tree.metadata = new ArrayValueMetadata(tree));
  }
  if (tree instanceof IdExpressionTree) {
    return (tree.metadata = new IdValueMetadata(tree));
  }
  if (tree instanceof InfixExpressionTree) {
    return (tree.metadata = new InfixValueMetadata(tree));
  }
  if (tree instanceof InvokeExpressionTree) {
    return (tree.metadata = new InvokeValueMetadata(tree));
  }
  if (tree instanceof LiteralExpressionTree) {
    return (tree.metadata = new LiteralValueMetadata(tree));
  }
  if (tree instanceof MemberExpressionTree) {
    return (tree.metadata = new MemberValueMetadata(tree));
  }
  if (tree instanceof MethodExpressionTree) {
    return (tree.metadata = new MethodValueMetadata(tree));
  }
  if (tree instanceof PrefixExpressionTree) {
    if (tree.name.text === 'import') {
      return (tree.metadata = new ImportValueMetadata(tree));
    }
    return (tree.metadata = new PrefixValueMetadata(tree));
  }
  Issue.errorFromTree(tree, `Value expression metadata not found for '${tree.constructor.name}'`);
}
