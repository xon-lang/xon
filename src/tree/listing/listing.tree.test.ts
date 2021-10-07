import { parse } from '../parse';
import { ListingTree } from './listing.tree';

test('two if', () => {
  const code = `xon.os: Path

1+1
if e:
    7+7
else: if d: call()
`;
  const tree = new ListingTree(parse(code).listing());
  expect(tree).toBeInstanceOf(ListingTree);

  expect(tree.libraries.length).toBe(1);
  expect(tree.libraries[0].path).toBe('xon.os');
  expect(tree.libraries[0].members.length).toBe(1);
  expect(tree.libraries[0].members[0].name).toBe('Path');
  expect(tree.libraries[0].members[0].alias).toBeFalsy();
});
