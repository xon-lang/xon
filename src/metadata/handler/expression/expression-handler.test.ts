import { parseExpression } from '../../../tree/parse';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { expressionHandler } from './expression-handler';
import { TestHandlerScope } from '../test-handler-scope';

test('array property', () => {
  const code = '123';
  const tree = parseExpression(code);

  const metadata = expressionHandler(tree, new TestHandlerScope());
  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  expect((metadata.type as IdTypeMetadata).name).toBe('Integer');
});
