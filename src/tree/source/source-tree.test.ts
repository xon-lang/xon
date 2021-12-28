import * as fs from 'fs';
import { ImportStatementTree } from '../statement/import/import-statement-tree';
import { parse, parseSource } from '../../util/parse';
import { SourceTree } from './source-tree';

test('two if', () => {
  const code = `import xon.os: Path

1+1
if e:
    7+7
else: if d: call()
`;
  const tree = new SourceTree(parse(code).source());
  expect(tree).toBeInstanceOf(SourceTree);

  const imports = tree.statements
    .filter((x) => x instanceof ImportStatementTree)
    .map((x) => x as ImportStatementTree);
  expect(imports.length).toBe(1);
  expect(imports[0].path).toBe('xon.os');
  expect(imports[0].members.length).toBe(1);
  expect(imports[0].members[0].id.text).toBe('Path');
  expect(imports[0].members[0].alias).toBeFalsy();
});

test('formatted 1.xon', () => {
  const code = fs.readFileSync('src/tree/source/test-files/1.xon').toString();
  const tree = parseSource(code);
  expect(tree).toBeInstanceOf(SourceTree);

  // const formatted = tree.toString();
  // fs.writeFileSync('src/tree/source/test-files/1.fmt.xon', formatted);
  // expect(code).toBe(formatted);
});
