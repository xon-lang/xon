import { parse } from '../parse';
import { ModuleTree } from './module.tree';

test('two if', () => {
  const code = `xon.os: Path

1+1
if e:
    7+7
else: if d: call()
`;
  const tree = new ModuleTree(parse(code).module());
  expect(tree).toBeInstanceOf(ModuleTree);

  expect(tree.libraries.length).toBe(1);
  expect(tree.libraries[0].scope).toBe('xon');
  expect(tree.libraries[0].name).toBe('os');
  expect(tree.libraries[0].members.length).toBe(1);
  expect(tree.libraries[0].members[0].name).toBe('Path');
  expect(tree.libraries[0].members[0].alias).toBeFalsy();
  expect(tree.statements.length).toBe(2);
});
