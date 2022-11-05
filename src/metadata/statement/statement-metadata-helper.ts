import { Issue } from '@/issue/issue';
import { CommentStatementMetadata } from '@/metadata/statement/comment/comment-statement-metadata';
import { DeclarationStatementMetadata } from '@/metadata/statement/declaration/declaration-statement-metadata';
import { ExpressionStatementMetadata } from '@/metadata/statement/expression/expression-statement-metadata';
import { IfStatementMetadata } from '@/metadata/statement/if/if-statement-metadata';
import { ReturnStatementMetadata } from '@/metadata/statement/return/return-statement-metadata';
import { StatementMetadata } from '@/metadata/statement/statement-metadata';
import { CommentStatementTree } from '@/tree/statement/comment/comment-statement-tree';
import { DeclarationStatementTree } from '@/tree/statement/declaration/declaration-statement-tree';
import { ExpressionStatementTree } from '@/tree/statement/expression/expression-statement-tree';
import { IfStatementTree } from '@/tree/statement/if/if-statement-tree';
import { ReturnStatementTree } from '@/tree/statement/return/return-statement-tree';
import { StatementTree } from '@/tree/statement/statement-tree';

export function getStatementMetadata(tree: StatementTree): StatementMetadata {
  if (tree instanceof ExpressionStatementTree) return new ExpressionStatementMetadata(tree);
  if (tree instanceof DeclarationStatementTree) return new DeclarationStatementMetadata(tree);
  if (tree instanceof IfStatementTree) return new IfStatementMetadata(tree);
  if (tree instanceof ReturnStatementTree) return new ReturnStatementMetadata(tree);
  if (tree instanceof CommentStatementTree) return new CommentStatementMetadata(tree);

  Issue.errorFromTree(tree, `Statement metadata not found for '${tree.constructor.name}'`);
}
