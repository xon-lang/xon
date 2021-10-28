import * as path from 'path';
import { IntegerLiteralTree } from '../../../tree/literal/integer-literal/integer-literal.tree';
import { parseLiteral } from '../../../tree/parse';
import { HandlerScope } from '../handler-scope';
import { LiteralHandler } from './literal-handler';

test('integer', () => {
  const code = '123';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree).toBeInstanceOf(IntegerLiteralTree);

  const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
  const scope = HandlerScope.fromGlobPath(globPath);
  new LiteralHandler(scope).handle(tree);
  expect(tree.value).toBe(123);
  expect(tree.definitionLink.id.text).toBe('Integer');
});
