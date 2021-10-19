import { parse } from '../parse';
import { ListingTree } from './listing-tree';

test('two if', () => {
  const code = `import xon.os: Path

1+1
if e:
    7+7
else: if d: call()
`;
  const tree = new ListingTree(parse(code).listing());
  expect(tree).toBeInstanceOf(ListingTree);

  expect(tree.imports.length).toBe(1);
  expect(tree.imports[0].path).toBe('xon.os');
  expect(tree.imports[0].members.length).toBe(1);
  expect(tree.imports[0].members[0].name).toBe('Path');
  expect(tree.imports[0].members[0].alias).toBeFalsy();
});
