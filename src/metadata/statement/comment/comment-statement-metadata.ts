import { StatementMetadata } from '~/metadata/statement/statement-metadata';
import { CommentStatementTree } from '~/tree/statement/comment/comment-statement-tree';

export class CommentStatementMetadata implements StatementMetadata {
  constructor(private tree: CommentStatementTree) {}
}
