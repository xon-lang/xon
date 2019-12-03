import { parseCode } from '../../test-helper/test-parser';
import { MultiplicationExpressionParser } from './multiplication-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

test('one multiply by one', () => {
    const code = '1*1';
    const parser = parseCode(code, ExpressionParser);
    expect(parser.value).toBeInstanceOf(MultiplicationExpressionParser);
});
