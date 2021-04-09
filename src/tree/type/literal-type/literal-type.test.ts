import { parseType } from '../../../parse';
import { LiteralTypeTree } from './literal-type.tree';

test('plain string type', () => {
  const code = '"string"';
  const tree = parseType<LiteralTypeTree>(code);
  expect(tree).toBeInstanceOf(LiteralTypeTree);

  expect(tree.literal.value).toBe('string');
});
