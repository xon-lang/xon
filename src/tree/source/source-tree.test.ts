import * as fs from 'fs';
import { parseSource, parseSourceFile } from '../../util/parse';
import { SourceTree } from './source-tree';

test('import and if', () => {
  const code = `{Path} = import 'xon.os'

1+1
if e
    7+7
else
  if d
    call()
`;
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.children.length).toBe(3);
});

test('preprocessor in attribute', () => {
  const code = `
toString: [] => String
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

test('two if statements', () => {
  const code = `
if a
  123
if b
  321
`.trim();
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
});

test('has comment', () => {
  const code = ` 
a := 1213

import abc
import def

-- comment
object someObjectFactory(name: String)
`.trim();
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
});

test('debug', () => {
  const code = ` 
abc: ABC

  if b is c
    return #{new SingleBodyTree(ctx)}

  if d is e
    return #{new MultipleBodyTree(ctx)}
`.trim();
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
});

test('1.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/1.xon');

  expect(tree).toBeInstanceOf(SourceTree);
  const formatted = tree.toString();
  fs.writeFileSync('src/tree/source/test-files/1.fmt.xon', formatted);
  // expect(code).toBe(formatted);
});

test('2.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/2.xon');

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.statements.length).toBe(2);
});
