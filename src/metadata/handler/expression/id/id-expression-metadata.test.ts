import { parseExpression } from '../../../../tree/parse';
import { TestHandlerScope } from '../../test-handler-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('null', () => {
  const code = 'null';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestHandlerScope());

  expect(metadata.type).toBeInstanceOf(FunctionTypeMetadata);
  expect((metadata.type as FunctionTypeMetadata).resultType).toBeInstanceOf(IdTypeMetadata);
  expect(((metadata.type as FunctionTypeMetadata).resultType as IdTypeMetadata).name).toBe(
    'String',
  );
});

test('true', () => {
  const code = 'true';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestHandlerScope());

  expect(metadata.type).toBeInstanceOf(FunctionTypeMetadata);
  expect((metadata.type as FunctionTypeMetadata).resultType).toBeInstanceOf(IdTypeMetadata);
  expect(((metadata.type as FunctionTypeMetadata).resultType as IdTypeMetadata).name).toBe(
    'String',
  );
});
