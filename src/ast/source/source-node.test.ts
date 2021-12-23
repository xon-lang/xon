import * as fs from 'fs';
import { parse, parseSource } from '../parse';
import { ImportStatementNode } from '../statement/import/import-statement-node';
import { SourceNode } from './source-node';

test('two if', () => {
  const code = `import xon.os: Path

1+1
if e:
    7+7
else: if d: call()
`;
  const node = new SourceNode(parse(code).source());
  expect(node).toBeInstanceOf(SourceNode);

  const imports = node.statements
    .filter((x) => x instanceof ImportStatementNode)
    .map((x) => x as ImportStatementNode);
  expect(imports.length).toBe(1);
  expect(imports[0].path).toBe('xon.os');
  expect(imports[0].members.length).toBe(1);
  expect(imports[0].members[0].id.text).toBe('Path');
  expect(imports[0].members[0].alias).toBeFalsy();
});

test('formatted 1.xon', () => {
  const code = fs.readFileSync('src/ast/source/test-files/1.xon').toString();
  const node = parseSource(code);
  expect(node).toBeInstanceOf(SourceNode);

  // const formatted = node.toString();
  // fs.writeFileSync('src/ast/source/test-files/1.fmt.xon', formatted);
  // expect(code).toBe(formatted);
});
