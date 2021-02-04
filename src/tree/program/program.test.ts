import { parse } from '../../parse';
import { ProgramTree } from './program.tree';

test('two if', () => {
  const code = `xon/os: Path

1+1
if e1:
    7+7
elif e2:
    call3()
`;
  const tree = new ProgramTree(parse(code).program());

  expect(tree).toBeInstanceOf(ProgramTree);

  expect(tree.imports.length).toBe(1);
  expect(tree.imports[0].scopeName).toBe('xon');
  expect(tree.imports[0].libName).toBe('os');
  expect(tree.imports[0].members.length).toBe(1);
  expect(tree.imports[0].members[0].name).toBe('Path');
  expect(tree.imports[0].members[0].alias).toBeFalsy();
  expect(tree.statements.length).toBe(2);
});
