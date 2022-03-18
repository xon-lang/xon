import * as fs from 'fs';
import { parseSource, parseSourceFile } from '../../util/parse';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { LiteralExpressionTree } from '../expression/literal/literal-expression-tree';
import { ImportStatementTree } from '../statement/import/import-statement-tree';
import { SourceTree } from './source-tree';

test('two if', () => {
  const code = `import 'xon.os': Path

1+1
if e
    7+7
else
  if d
    call()
`;
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
  const imports = tree.statements
    .filter((x) => x instanceof ImportStatementTree)
    .map((x) => x as ImportStatementTree);
  expect(imports.length).toBe(1);
  expect((imports[0].path as LiteralExpressionTree).literal.value).toBe('xon.os');
  expect(imports[0].members.length).toBe(1);
  expect((imports[0].members[0] as IdExpressionTree).name.text).toBe('Path');
});

test('formatted 1.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/1.xon');

  expect(tree).toBeInstanceOf(SourceTree);
  const formatted = tree.toString();
  fs.writeFileSync('src/tree/source/test-files/1.fmt.xon', formatted);
  // expect(code).toBe(formatted);
});

test('import sort and unique', () => {
  const code = `
import 'xon.os': Path, Path
import 'xon.os': Path, Path, m2
import 'xon.os2': Path, Path, Path2
import 'xon.os': Path

`.trim();
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.toString()).toBe(
    `
import 'xon.os': m2, Path
import 'xon.os2': Path, Path2
`.trim() + '\n',
  );
});

test('preprocessor in attribute', () => {
  const code = `
toString[] String
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

// todo fix it with indentString method
// test('preprocessor in definition', () => {
//   const code = `
// object A
//   toString[] String
//     importStatementsMap = #{{}}
//     #{
// return 123
//     }
// `.trim();
//   const tree = parseSource(code);

//   expect(tree).toBeInstanceOf(SourceTree);
//   expect(tree.toString()).toBe(code + '\n');
// });
