import { parseCode, evalExpression } from '../../../test-helper';
import { AddSubExpressionTree } from './add-sub-expression.tree';

test('one_plus_one', () => {
    const code = '1+1';
    const tree = parseCode(code, AddSubExpressionTree);
    expect(evalExpression(tree)).toBe(2);
});

test('one_plus_one', () => {
    const code = '2563460-25_325_235_265_311';
    const tree = parseCode(code, AddSubExpressionTree);
    expect(evalExpression(tree)).toBe(2563460 - 25_325_235_265_311);
});
