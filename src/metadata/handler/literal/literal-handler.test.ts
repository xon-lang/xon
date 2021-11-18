import { IntegerLiteralTree } from '../../../tree/literal/integer-literal/integer-literal.tree';
import { NullLiteralTree } from '../../../tree/literal/null-literal/null-literal.tree';
import { parseLiteral } from '../../../tree/parse';
import { LiteralHandler } from './literal-handler';

test('integer', () => {
  const code = '123';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree).toBeInstanceOf(IntegerLiteralTree);

  new LiteralHandler().handle(tree);
  expect(tree.value).toBe(123);
  expect(tree.typeMetadata.name).toBe('Integer');
  expect(tree.typeMetadata.genericArguments.length).toBe(1);
  expect(tree.typeMetadata.genericArguments[0].name).toBe('#IntegerLiteral');
});

test('null', () => {
  const code = 'null';
  const tree = parseLiteral<NullLiteralTree>(code);
  expect(tree).toBeInstanceOf(NullLiteralTree);

  new LiteralHandler().handle(tree);
  expect(tree.value).toBe(null);
  expect(tree.typeMetadata.name).toBe('Null');
  expect(tree.typeMetadata.genericArguments.length).toBe(0);
});
