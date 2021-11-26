import { parseExpression } from '../../../../tree/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('null', () => {
  const code = 'null';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(FunctionTypeMetadata);
  expect((metadata.type as FunctionTypeMetadata).returnType).toBeInstanceOf(IdTypeMetadata);
  expect(((metadata.type as FunctionTypeMetadata).returnType as IdTypeMetadata).name).toBe(
    'String',
  );
});

test('true', () => {
  const code = 'true';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(FunctionTypeMetadata);
  expect((metadata.type as FunctionTypeMetadata).returnType).toBeInstanceOf(IdTypeMetadata);
  expect(((metadata.type as FunctionTypeMetadata).returnType as IdTypeMetadata).name).toBe(
    'String',
  );
});
