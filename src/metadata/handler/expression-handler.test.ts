import { parseExpression } from '../../tree/parse';
import { expressionHandler } from './expression-handler';
import { TestHandlerScope } from './test-handler-scope';

test('array property', () => {
  const code = '123';
  const tree = parseExpression(code);

  expect(expressionHandler(tree, new TestHandlerScope())).toBe(null);
});
