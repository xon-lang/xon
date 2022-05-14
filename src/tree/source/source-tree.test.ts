import * as fs from 'fs';
import { parseSource, parseSourceFile } from '../../util/parse';
import { SourceTree } from './source-tree';

test('two if', () => {
  const code = `{Path}: import 'xon.os'

1+1
if e
    7+7
else
  if d
    call()
`;
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
});

test('formatted 1.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/1.xon');

  expect(tree).toBeInstanceOf(SourceTree);
  const formatted = tree.toString();
  fs.writeFileSync('src/tree/source/test-files/1.fmt.xon', formatted);
  // expect(code).toBe(formatted);
});

test('preprocessor in attribute', () => {
  const code = `
toString [] => String
  importStatements = this.statements.filter[[x] => x is ImportStatementTree].map[[x] => x as ImportStatementTree]
  importStatementsMap = #{{}}
  #{
    for (let importStatement of importStatements) {
      importStatementsMap[importStatement.path.toString()] = importStatementsMap[importStatement.path.toString()] || []
      const members = importStatement.members.map(x => x.toString())
      importStatementsMap[importStatement.path.toString()].push(...members)
    }
  }
`.trim();
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.toString()).toBe(code + '\n');
});
