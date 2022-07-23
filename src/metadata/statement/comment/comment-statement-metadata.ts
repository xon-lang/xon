import { CommentStatementTree } from '../../../tree/statement/comment/comment-statement-tree';
import { StatementMetadata } from '../statement-metadata';

export class CommentStatementMetadata implements StatementMetadata {
  constructor(private tree: CommentStatementTree) {}
}
