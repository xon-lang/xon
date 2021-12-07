import { parseType } from '../../parse';
import { IdTypeTree } from '../id/id-type.tree';
import { ParenthesizedTypeTree } from './parenthesized-type.tree';

test('has id name', () => {
  const code = '(String)';
  const tree = parseType<ParenthesizedTypeTree>(code);
  expect(tree).toBeInstanceOf(ParenthesizedTypeTree);

  expect((tree.type as IdTypeTree).id.text).toBe('String');
});
