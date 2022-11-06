import { CommentStatementTree } from '~/tree/statement/comment/comment-statement-tree';
import { parseStatement } from '~/util/parse';

test('comment', () => {
  const code = '-- abc';
  const tree = parseStatement(code) as CommentStatementTree;

  expect(tree).toBeInstanceOf(CommentStatementTree);
});
