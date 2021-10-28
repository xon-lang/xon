import * as path from 'path';
import { IntegerLiteralTree } from '../../tree/literal/integer-literal/integer-literal.tree';
import { parseLiteral } from '../../tree/parse';
import { LiteralHandler } from './literal-handler';
import { createScopeGlobPath } from './temp-helper';

test('integer', () => {
  const code = '123';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree).toBeInstanceOf(IntegerLiteralTree);

  const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
  const scope = createScopeGlobPath(globPath);
  new LiteralHandler(scope).handle(tree);
  expect(tree.value).toBe(123);
  expect(tree.definitionLink.id.text).toBe('Integer');
});
