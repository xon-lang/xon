import { IntegerLiteralTree } from '../../../tree/literal/integer-literal/integer-literal.tree';
import { parseLiteral } from '../../../tree/parse';
import { HandlerScope } from '../handler-scope';
import { LiteralHandler } from './literal-handler';

test('integer', () => {
  const code = '123';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree).toBeInstanceOf(IntegerLiteralTree);

  const scope = HandlerScope.fromCoreModule();
  new LiteralHandler(scope).handle(tree);
  expect(tree.value).toBe(123);
  expect(tree.typeMetadata.name).toBe('Integer');
});
