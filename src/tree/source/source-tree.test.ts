import * as fs from 'fs';
import { parse, parseSourceFile } from '../../util/parse';
import { ImportStatementTree } from '../statement/import/import-statement-tree';
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
  expect(imports[0].members[0].alias).toBe(null);
});

test('formatted 1.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/1.xon');
  expect(tree).toBeInstanceOf(SourceTree);

  console.log(tree.statements.length);

  const formatted = tree.toString();
  fs.writeFileSync('src/tree/source/test-files/1.fmt.xon', formatted);
  // expect(code).toBe(formatted);
});
