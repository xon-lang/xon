import { parseCode } from '../../test-helper/test-parser';
import { DivideExpressionParser } from './divide-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

test('one divide by one', () => {
    const code = '1/1';
    const parser = parseCode(code, ExpressionParser);
    expect(parser.value).toBeInstanceOf(DivideExpressionParser);
});
