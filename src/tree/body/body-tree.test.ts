import { BodyTree } from '~/tree/body/body-tree';
import { parseBody } from '~/util/parse';

test('id value', () => {
  const code = '\n  a = 1';
  const tree = parseBody(code);

  expect(tree).toBeInstanceOf(BodyTree);
});
