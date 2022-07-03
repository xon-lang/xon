import { parseStatement } from '../../../util/parse';
import { CommentStatementTree } from './comment-statement-tree';

test('comment', () => {
  const code = '-- abc';
  const tree = parseStatement(code) as CommentStatementTree;

  expect(tree).toBeInstanceOf(CommentStatementTree);
});
