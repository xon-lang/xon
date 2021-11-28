import { parseExpression } from '../../../tree/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { TupleTypeMetadata } from '../../type/tuple/tuple-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('empty', () => {
  const code = '[]';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(TupleTypeMetadata);
  const type = metadata.type as TupleTypeMetadata;
  expect(type.itemsTypes.length).toBe(0);
});

test('123', () => {
  const code = '[1, 2, 3]';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(TupleTypeMetadata);
  const type = metadata.type as TupleTypeMetadata;
  expect(type.itemsTypes.length).toBe(3);
  expect(type.itemsTypes[0].declaration.name).toBe('Integer');
});
