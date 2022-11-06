import { SourceTree } from '~/tree';
import { parseSource, parseSourceFile } from '~/util';

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
`;
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
});

test('1-error.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/1-error.xon');

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.issues.length).toBe(1);
  expect(tree.issues[0].sourceRange.start.line).toBe(4);
  expect(tree.issues[0].sourceRange.start.column).toBe(22);
  expect(tree.issues[0].sourceRange.stop.line).toBe(4);
  expect(tree.issues[0].sourceRange.stop.column).toBe(25);
});

test('2-error.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/2-error.xon');

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.issues.length).toBe(1);
  expect(tree.issues[0].sourceRange.start.line).toBe(6);
  expect(tree.issues[0].sourceRange.start.column).toBe(7);
  expect(tree.issues[0].sourceRange.stop.line).toBe(6);
  expect(tree.issues[0].sourceRange.stop.column).toBe(12);
});
