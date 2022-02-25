import * as fs from 'fs';
import { parse, parseSourceFile } from '../../util/parse';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { LiteralExpressionTree } from '../expression/literal/literal-expression-tree';
import { ImportStatementTree } from '../statement/import/import-statement-tree';
import { SourceTree } from './source-tree';

test('two if', () => {
  const code = `import 'xon.os': Path

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
  expect((imports[0].path as LiteralExpressionTree).literal.value).toBe('xon.os');
  expect(imports[0].members.length).toBe(1);
  expect((imports[0].members[0] as IdExpressionTree).id.name.text).toBe('Path');
});

test('formatted 1.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/1.xon');
  expect(tree).toBeInstanceOf(SourceTree);

  const formatted = tree.toString();
  fs.writeFileSync('src/tree/source/test-files/1.fmt.xon', formatted);
  // expect(code).toBe(formatted);
});
