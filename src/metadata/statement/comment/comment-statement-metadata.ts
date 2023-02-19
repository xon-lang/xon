import { StatementMetadata } from '~/metadata/statement/statement-metadata';
import { CommentStatementTree } from '~/tree/expression/comment/comment-expression-tree';

export class CommentStatementMetadata implements StatementMetadata {
  constructor(private tree: CommentStatementTree) {}
}
