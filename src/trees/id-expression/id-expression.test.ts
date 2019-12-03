import { parseCode } from '../../test-helper/test-parser';
import { IdExpressionParser } from './id-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

test('variable', () => {
  const code = 'myVariable';
  const parser = parseCode(code, ExpressionParser)
  expect(parser.value).toBeInstanceOf(IdExpressionParser);

  if (parser instanceof IdExpressionParser) {
    expect(parser.id).toBe('myVariable');
  }
});

test('number is not id', () => {
  const code = '123';
  const parser = parseCode(code, ExpressionParser)
  expect(parser.value).not.toBeInstanceOf(IdExpressionParser);
});
