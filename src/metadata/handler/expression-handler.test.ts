import { parseExpression } from '../../tree/parse';
import { expressionHandler } from './expression-handler';

test('array property', () => {
  const code = '123';
  const tree = parseExpression(code);


  expect(expressionHandler(tree, )).toBe(null);
});
