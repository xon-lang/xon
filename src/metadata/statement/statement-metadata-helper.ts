import { Issue } from '~/issue';
import {
  CommentStatementMetadata,
  DeclarationStatementMetadata,
  ExpressionStatementMetadata,
  IfStatementMetadata,
  ReturnStatementMetadata,
  StatementMetadata,
} from '~/metadata';
import {
  CommentStatementTree,
  DeclarationStatementTree,
  ExpressionStatementTree,
  IfStatementTree,
  ReturnStatementTree,
  StatementTree,
} from '~/tree';

export function getStatementMetadata(tree: StatementTree): StatementMetadata {
  if (tree instanceof ExpressionStatementTree) return new ExpressionStatementMetadata(tree);
  if (tree instanceof DeclarationStatementTree) return new DeclarationStatementMetadata(tree);
  if (tree instanceof IfStatementTree) return new IfStatementMetadata(tree);
  if (tree instanceof ReturnStatementTree) return new ReturnStatementMetadata(tree);
  if (tree instanceof CommentStatementTree) return new CommentStatementMetadata(tree);

  Issue.errorFromTree(tree, `Statement metadata not found for '${tree.constructor.name}'`);
}
