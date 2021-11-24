import { IntegerLiteralTree } from '../../../tree/literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../../../tree/literal/string-literal/string-literal.tree';
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

test('string', () => {
  const code = '"ABC"';
  const tree = parseLiteral<StringLiteralTree>(code);
  expect(tree).toBeInstanceOf(StringLiteralTree);

  new LiteralHandler().handle(tree);
  expect(tree.value).toBe('ABC');
  expect(tree.typeMetadata.name).toBe('String');
  expect(tree.typeMetadata.genericArguments.length).toBe(0);
});
