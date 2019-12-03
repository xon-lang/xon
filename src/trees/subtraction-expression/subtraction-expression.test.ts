import { parseCode } from '../../test-helper/test-parser';
import { SubtractionExpressionParser } from './subtraction-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

test('one minus one', () => {
    const code = '1-1';
    const parser = parseCode(code, ExpressionParser);
    expect(parser.value).toBeInstanceOf(SubtractionExpressionParser);
});
