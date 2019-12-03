import { parseCode } from '../../test-helper/parse';
import { MultiplicationExpressionTree } from './multiplication-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('one multiply by one', () => {
    const code = '1*1';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(MultiplicationExpressionTree);
});
