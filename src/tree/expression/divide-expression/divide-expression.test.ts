import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { DivideExpressionTree } from './divide-expression.tree';

test('333 divide by 111', () => {
    const code = '333/111';
    const tree = parseExpression<DivideExpressionTree>(code);
    expect(evalExpression(tree)).toBe(333 / 111);
});
