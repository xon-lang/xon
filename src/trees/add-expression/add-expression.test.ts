import { parseCode } from '../../test-helper/test-parser';
import { AddExpressionParser } from './add-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

test('one plus one', () => {
    const code = '1+1';
    const parser = parseCode(code, ExpressionParser);
    expect(parser.value).toBeInstanceOf(AddExpressionParser);
});
