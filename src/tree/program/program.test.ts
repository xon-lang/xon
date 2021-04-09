import { parse } from '../parse';
import { ProgramTree } from './program.tree';

test('two if', () => {
  const code = `xon/os: Path

1+1
if e then
    7+7
else if d then
    call()
`;
  const tree = new ProgramTree(parse(code).program());
  expect(tree).toBeInstanceOf(ProgramTree);

  expect(tree.libraries.length).toBe(1);
  expect(tree.libraries[0].scope).toBe('xon');
  expect(tree.libraries[0].name).toBe('os');
  expect(tree.libraries[0].members.length).toBe(1);
  expect(tree.libraries[0].members[0].name).toBe('Path');
  expect(tree.libraries[0].members[0].alias).toBeFalsy();
  expect(tree.statements.length).toBe(2);
});
