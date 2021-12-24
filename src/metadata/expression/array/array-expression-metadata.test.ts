import { parseExpression } from '../../../ast/util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { TupleTypeMetadata } from '../../type/tuple/tuple-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('empty', () => {
  const code = '[]';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new CoreDeclarationScope());

  expect(metadata.type).toBeInstanceOf(TupleTypeMetadata);
  const type = metadata.type as TupleTypeMetadata;
  expect(type.itemsTypes.length).toBe(0);
});

test('123', () => {
  const code = '[1, 2, 3]';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new CoreDeclarationScope());

  expect(metadata.type).toBeInstanceOf(TupleTypeMetadata);
  const type = metadata.type as TupleTypeMetadata;
  expect(type.itemsTypes.length).toBe(3);
  expect(type.itemsTypes[0].declaration.name).toBe('Integer');
});
