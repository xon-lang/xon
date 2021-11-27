import { parseExpression } from '../../../tree/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { IdExpressionMetadata } from './id-expression-metadata';

test('null', () => {
  const code = 'null';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(IdExpressionMetadata);

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  const type = metadata.type as IdTypeMetadata;
  expect(type.declaration.name).toBe('Null');
});

test('true', () => {
  const code = 'true';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(IdExpressionMetadata);

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  const type = metadata.type as IdTypeMetadata;
  expect(type.declaration.name).toBe('Boolean');
});
