import { parseExpression } from '../../../../tree/parse';
import { FunctionTypeMetadata } from '../../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../../type/id/id-type-metadata';
import { TestHandlerScope } from '../../test-handler-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('id', () => {
  const code = 'String';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestHandlerScope());

  expect(metadata.type).toBeInstanceOf(FunctionTypeMetadata);
  expect((metadata.type as FunctionTypeMetadata).resultType).toBeInstanceOf(IdTypeMetadata);
  expect(((metadata.type as FunctionTypeMetadata).resultType as IdTypeMetadata).name).toBe(
    'String',
  );
});
