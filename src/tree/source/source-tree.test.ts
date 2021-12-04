import * as fs from 'fs';
import { parse, parseSource } from '../parse';
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

  expect(tree.imports.length).toBe(1);
  expect(tree.imports[0].path).toBe('xon.os');
  expect(tree.imports[0].members.length).toBe(1);
  expect(tree.imports[0].members[0].id.text).toBe('Path');
  expect(tree.imports[0].members[0].alias).toBeFalsy();
});

test('formatted 1.xon', () => {
  const code = fs.readFileSync('src/tree/source/test-files/1.xon').toString();
  const tree = parseSource(code);
  expect(tree).toBeInstanceOf(SourceTree);

  // const formatted = tree.toString();
  // fs.writeFileSync('src/tree/source/test-files/1.fmt.xon', formatted);
  // expect(code).toBe(formatted);
});
