import { StatementMetadata } from '~/metadata';
import { CommentStatementTree } from '~/tree';

export class CommentStatementMetadata implements StatementMetadata {
  constructor(private tree: CommentStatementTree) {}
}
