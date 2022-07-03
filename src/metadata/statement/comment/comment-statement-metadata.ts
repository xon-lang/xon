import { CommentStatementTree } from '../../../tree/statement/comment/comment-statement-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class CommentStatementMetadata implements StatementMetadata {
  constructor(private tree: CommentStatementTree, private scope: DeclarationScope) {}
}
