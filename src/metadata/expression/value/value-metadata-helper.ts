import { Issue } from '~/issue/issue';
import { ArrayValueMetadata } from '~/metadata/expression/value/array/array-value-metadata';
import { IdValueMetadata } from '~/metadata/expression/value/id/id-value-metadata';
import { ImportValueMetadata } from '~/metadata/expression/value/import/import-value-metadata';
import { InfixValueMetadata } from '~/metadata/expression/value/infix/infix-value-metadata';
import { InvokeValueMetadata } from '~/metadata/expression/value/invoke/invoke-value-metadata';
import { LiteralValueMetadata } from '~/metadata/expression/value/literal/literal-value-metadata';
import { MemberValueMetadata } from '~/metadata/expression/value/member/member-value-metadata';
import { MethodValueMetadata } from '~/metadata/expression/value/method/method-value-metadata';
import { PrefixValueMetadata } from '~/metadata/expression/value/prefix/prefix-value-metadata';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { GroupExpressionTree } from '~/tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { LiteralExpressionTree } from '~/tree/expression/literal/literal-expression-tree';
import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { MethodExpressionTree } from '~/tree/expression/method/method-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';

export function fillValueMetadata(tree: ExpressionTree): ValueMetadata {
  if (tree instanceof GroupExpressionTree) {
    tree.metadata = fillValueMetadata(tree.expression);
    return tree.metadata as ValueMetadata;
  }
  if (tree instanceof ArrayExpressionTree) {
    tree.metadata = new ArrayValueMetadata(tree);
    return tree.metadata as ValueMetadata;
  }
  if (tree instanceof IdExpressionTree) {
    tree.metadata = new IdValueMetadata(tree);
    return tree.metadata as ValueMetadata;
  }
  if (tree instanceof InfixExpressionTree) {
    tree.metadata = new InfixValueMetadata(tree);
    return tree.metadata as ValueMetadata;
  }
  if (tree instanceof InvokeExpressionTree) {
    tree.metadata = new InvokeValueMetadata(tree);
    return tree.metadata as ValueMetadata;
  }
  if (tree instanceof LiteralExpressionTree) {
    tree.metadata = new LiteralValueMetadata(tree);
    return tree.metadata as ValueMetadata;
  }
  if (tree instanceof MemberExpressionTree) {
    tree.metadata = new MemberValueMetadata(tree);
    return tree.metadata as ValueMetadata;
  }
  if (tree instanceof MethodExpressionTree) {
    tree.metadata = new MethodValueMetadata(tree);
    return tree.metadata as ValueMetadata;
  }
  if (tree instanceof PrefixExpressionTree) {
    if (tree.name.text === 'import') {
      tree.metadata = new ImportValueMetadata(tree);
      return tree.metadata as ValueMetadata;
    }
    tree.metadata = new PrefixValueMetadata(tree);
    return tree.metadata as ValueMetadata;
  }
  Issue.errorFromTree(tree, `Value expression metadata not found for '${tree.constructor.name}'`);
}
