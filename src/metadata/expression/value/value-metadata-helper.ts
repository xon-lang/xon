import { Issue } from '~/issue';
import {
  ArrayValueMetadata,
  IdValueMetadata,
  ImportValueMetadata,
  InfixValueMetadata,
  InvokeValueMetadata,
  LiteralValueMetadata,
  MemberValueMetadata,
  MethodValueMetadata,
  PrefixValueMetadata,
  ValueMetadata,
} from '~/metadata';
import {
  ArrayExpressionTree,
  ExpressionTree,
  GroupExpressionTree,
  IdExpressionTree,
  InfixExpressionTree,
  InvokeExpressionTree,
  LiteralExpressionTree,
  MemberExpressionTree,
  MethodExpressionTree,
  PrefixExpressionTree,
} from '~/tree';

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
